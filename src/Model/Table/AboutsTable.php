<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Abouts Model
 *
 * @property \App\Model\Table\SobreImagensTable|\Cake\ORM\Association\HasMany $SobreImagens
 *
 * @method \App\Model\Entity\About get($primaryKey, $options = [])
 * @method \App\Model\Entity\About newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\About[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\About|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\About saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\About patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\About[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\About findOrCreate($search, callable $callback = null, $options = [])
 */
class AboutsTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('abouts');
        $this->setDisplayField('title');
        $this->setPrimaryKey('id');

        $this->addBehavior('Josegonzalez/Upload.Upload', [
            'capa' => [
                'fields' => [
                    // if these fields or their defaults exist
                    // the values will be set.
                    'dir' => 'capa_dir', // defaults to `dir`
                    'size' => 'capa_size', // defaults to `size`
                    'type' => 'capa_type', // defaults to `type`
                ],
            ],
        ]);

        $this->hasMany('SobreImagens', [
            'foreignKey' => 'about_id'
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->integer('id')
            ->allowEmptyString('id', 'create');

        $validator
            ->scalar('titulo_sobre')
            ->maxLength('titulo_sobre', 255)
            ->allowEmptyString('titulo_sobre');

        $validator
            ->scalar('descricao')
            ->allowEmptyString('descricao');

        $validator
            ->scalar('titulo_missao')
            ->maxLength('titulo_missao', 50)
            ->allowEmptyString('titulo_missao');

        $validator
            ->scalar('descricao_missao')
            ->allowEmptyString('descricao_missao');

        $validator
            ->scalar('titulo_visao')
            ->maxLength('titulo_visao', 255)
            ->allowEmptyString('titulo_visao');

        $validator
            ->scalar('descricao_visao')
            ->maxLength('descricao_visao', 255)
            ->allowEmptyString('descricao_visao');

        $validator
            ->scalar('titulo_valor')
            ->maxLength('titulo_valor', 255)
            ->allowEmptyString('titulo_valor');

        $validator
            ->scalar('descricao_valor')
            ->maxLength('descricao_valor', 255)
            ->allowEmptyString('descricao_valor');

        $validator
            ->allowEmptyString('capa');


        return $validator;
    }
}
