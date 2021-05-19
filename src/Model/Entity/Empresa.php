<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Empresa Entity
 *
 * @property int $id
 * @property int $categoria_id
 * @property string $nome_empresa
 * @property string $nome_servico
 * @property string|null $descricao_servico
 * @property string|null $tel_contato
 * @property string|null $tel_whats
 * @property string|null $facebook
 * @property string|null $instagram
 * @property string|null $email
 * @property string|null $site
 * @property string|null $endereco
 * @property string|null $capa
 * @property string|null $capa_dir
 *
 * @property \App\Model\Entity\Categoria $categoria
 * @property \App\Model\Entity\Servico[] $servicos
 */
class Empresa extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'categoria_id' => true,
        'nome_empresa' => true,
        'nome_servico' => true,
        'descricao_servico' => true,
        'tel_contato' => true,
        'tel_whats' => true,
        'facebook' => true,
        'instagram' => true,
        'email' => true,
        'site' => true,
        'endereco' => true,
//        'capa' => true,
//        'capa_dir' => true,
        'categoria' => true,
        'servicos' => true
    ];
}
