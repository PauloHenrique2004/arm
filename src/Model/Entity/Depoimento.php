<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Depoimento Entity
 *
 * @property int $id
 * @property string|null $cliente
 * @property string $descricao
 * @property string $photo
 * @property string $photo_dir
 */
class Depoimento extends Entity
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
        'cliente' => true,
        'descricao' => true,
        'photo' => true,
        'photo_dir' => true
    ];
}
