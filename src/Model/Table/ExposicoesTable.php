<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Exposicoes Model
 *
 * @method \App\Model\Entity\Exposico get($primaryKey, $options = [])
 * @method \App\Model\Entity\Exposico newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Exposico[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Exposico|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Exposico saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Exposico patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Exposico[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Exposico findOrCreate($search, callable $callback = null, $options = [])
 */
class ExposicoesTable extends Table
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

        $this->setTable('exposicoes');
        $this->setDisplayField('nome');
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

            'foto' => [
                'fields' => [
                    // if these fields or their defaults exist
                    // the values will be set.
                    'dir' => 'foto_dir', // defaults to `dir`
                    'size' => 'foto_size', // defaults to `size`
                    'type' => 'foto_type', // defaults to `type`
                ],
            ],
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
            ->scalar('nome')
            ->maxLength('nome', 255)
            ->requirePresence('nome', 'create')
            ->allowEmptyString('nome', false);

        $validator
            ->scalar('descricao')
            ->requirePresence('descricao', 'create')
            ->allowEmptyString('descricao', false);

        $validator
            ->date('data')
            ->requirePresence('data', 'create')
            ->allowEmptyDate('data', false);



//        $validator
//            ->date('data_final')
//            ->requirePresence('data_final', 'create')
//            ->allowEmptyDate('data_final', true);

        $validator
             ->allowEmptyString('capa', true)
            ->requirePresence('capa', false);



        $validator
            ->scalar('profissional')
            ->maxLength('profissional', 255)
            ->requirePresence('profissional', 'create')
            ->allowEmptyString('profissional', false);

        $validator
            ->allowEmptyString('foto', true);


        return $validator;
    }
}
