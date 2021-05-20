<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * About Entity
 *
 * @property int $id
 * @property string|null $titulo_sobre
 * @property string|null $descricao
 * @property string|null $titulo_missao
 * @property string|null $descricao_missao
 * @property string|null $titulo_visao
 * @property string|null $descricao_visao
 * @property string|null $titulo_valor
 * @property string|null $descricao_valor
 * @property string|null $capa
 * @property string|null $capa_dir
 *
 * @property \App\Model\Entity\SobreImagen[] $sobre_imagens
 */
class About extends Entity
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
        'titulo_sobre' => true,
        'descricao' => true,
        'titulo_missao' => true,
        'descricao_missao' => true,
        'titulo_visao' => true,
        'descricao_visao' => true,
        'titulo_valor' => true,
        'descricao_valor' => true,
        'capa' => true,
        'capa_dir' => true,
        'video' => true
    ];
}
