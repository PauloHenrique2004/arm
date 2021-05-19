<?php

/**
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Leonardo Stefani
 * @email     leonardo.stfn@gmail.com
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */
class Deploy {
    private $github_repository_name = 'web_inovarseg';
    private $github_account_name = 'fabtechinfo';
    private $github_oauth = 'a7d3040dc33fe09db58a16a1180f8b213d3b14f6';
    private $composerFileName = 'composer.phar';
    private $cpanelPythonPhpWrapper = 'deploy.py';

    public function run($argv) {
        ob_start();

        $this->cpanelDetect($argv);

	$this->echoln('<b>Verificando se o respositório existe...</b>');

        if(file_exists($this->repositoryLocalDirectory() . "/.git")) {
            $this->gitPull();
        }
        else {
            $this->gitClone();
        }

        $this->composerSetup();
        $this->composerInstall();
    }

    // Instala as dependências do projeto
    private function composerInstall() {
        $this->echoln('<b>Instalando as dependêcias do projeto...</b>');

        putenv("COMPOSER_HOME={$this->repositoryLocalDirectory()}");

        $this->echoln( 
            $this->runBash("php {$this->composerFileName} install", $this->repositoryLocalDirectory())
        );
        $this->echoln('<b>Instalando as dependêcias do projeto. [OK]</b>');
    }

    // Caso o composer não exista, esse método irá instalar
    private function composerSetup() {
        $tmpCurrentDir = getcwd();
        chdir($this->repositoryLocalDirectory());

        // Verificando se o composer existe
        if(!file_exists($this->composerFileName)) {
            $hashFile = '4e4c1cd74b54a26618699f3190e6f5fc63bb308b13fa660f71f2a2df047c0e17';
            $version = '1.8.5';

            $this->echoln('<b>Instalando composer...</b>');

            // Baixando o composer
            $this->echoln(copy(
                "https://getcomposer.org/download/{$version}/{$this->composerFileName}", 
                $this->composerFileName
            ));
            // Veirificando se a instalação foi realizado com sucesso
            if(!file_exists($this->composerFileName))
                $this->dieln('Falha no download!');
            if (hash_file('sha256', $this->composerFileName) !== $hashFile)
                $this->dieln('Instalação corrompida!');

            $this->echoln('<b>Composer instalado com sucesso!</b>');
        }

        chdir($tmpCurrentDir);
    }

    private function gitPull() {
        $this->echoln("<b>Recebendo atualizações...</b>");
        $this->echoln($this->runBash("git pull {$this->gitUrl()}", $this->repositoryLocalDirectory()));
        $this->echoln("<b>Recebendo atualizações. [OK]</b>");
    }

    private function gitClone() {
        $this->echoln("<b>Realizando clone...</b>");
        $this->echoln($this->runBash("git clone {$this->gitUrl()}", $this->repositoryLocalDirectory()));
        $this->echoln("<b>Realizando clone. [OK]</b>");
    }

    // Retora a url do projeto no Github
    private function gitUrl() {
        return "https://{$this->github_oauth}@github.com/{$this->github_account_name}/{$this->github_repository_name}.git";
    }

    private function echoln($text) {
        echo($text . '<br><br>');
    }
    
    private function dieln($text) {
        die($text . '<br><br>');
    }

    private function runBash($cmd, $dir = null) {
        if($dir != null) {
            $tmpCurrentDir = getcwd();
            chdir($dir);
            $output = shell_exec("{$cmd} 2>&1");
            chdir($tmpCurrentDir);
        }
        else
            $output = shell_exec("{$cmd} 2>&1");
        return $output;
    }

    private function cpanelDetect($argv) {
    	if(file_exists('/opt/cpanel')) {
                $this->echoln('Cpanel detectado.');

        	if(!isset($argv) || $argv[1] != '-frompython') {
        		if(!file_exists($this->cpanelPythonPhpWrapper))
        			$this->dieln("Faltando o arquivo {$this->cpanelPythonPhpWrapper}!");
			if(substr(sprintf('%o', fileperms($this->cpanelPythonPhpWrapper)), -4) != '0755')
				$this->dieln("Altere as permissões do arquivo {$this->cpanelPythonPhpWrapper} para 755");

			$file = fopen('./deploy_allowed.txt',"w");
                        echo fwrite($file,"");
                        fclose($file);

			header("Location: {$this->cpanelPythonPhpWrapper}");
			exit();
        	}
	}
    }

    // Retora o diretorio do projeto local
    private function repositoryLocalDirectory() {
        // return getcwd()."../{$this->github_repository_name}";
        return dirname(__DIR__);
    }
}

(new Deploy())->run($argv);

echo('<br><center>Copyright - Leonardo Stefani</center>');