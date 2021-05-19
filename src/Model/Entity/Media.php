<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Media Entity
 *
 * @property int $id
 * @property string $nome
 * @property string $imagem
 * @property string $imagem_dir
 * @property string $descricao
 * @property string $video
 * @property int $exposicoe_id
 *
 * @property \App\Model\Entity\Exposico $exposico
 */
class Media extends Entity
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
        'imagem' => true,
        'imagem_dir' => true,
        'descricao' => true,
        'video' => true,
        'exposicoe_id' => true,
        'exposico' => true
    ];
}
