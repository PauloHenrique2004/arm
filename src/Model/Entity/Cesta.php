<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Cesta Entity
 *
 * @property int $id
 * @property \Cake\I18n\FrozenTime|null $created
 * @property \Cake\I18n\FrozenTime|null $modified
 * @property string|null $name
 * @property string|null $description
 * @property string|null $capa
 * @property string|null $capa_dir
 * @property string $preco
 *
 * @property \App\Model\Entity\ProdutoImage[] $produto_images
 */
class Cesta extends Entity
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
        'created' => true,
        'modified' => true,
        'name' => true,
        'description' => true,
        'capa' => true,
        'capa_dir' => true,
        'preco' => true,
        'produto_images' => true
    ];
}
