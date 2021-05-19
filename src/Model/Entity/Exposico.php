<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Exposico Entity
 *
 * @property int $id
 * @property string $nome
 * @property string $descricao
 * @property \Cake\I18n\FrozenDate $data
 * @property string $capa
 * @property string|null $capa_dir
 * @property string $profissional
 * @property string $foto
 * @property string|null $foto_dir
 */
class Exposico extends Entity
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
        'nome' => true,
        'descricao' => true,
        'data' => true,
        'data_final' => true,
        'capa' => true,
        'capa_dir' => true,
        'profissional' => true,
        'foto' => true,
        'foto_dir' => true,
        'desativar' => true
    ];
}
