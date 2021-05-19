<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Empresas Model
 *
 * @property \App\Model\Table\CategoriasTable|\Cake\ORM\Association\BelongsTo $Categorias
 * @property \App\Model\Table\ServicosTable|\Cake\ORM\Association\HasMany $Servicos
 *
 * @method \App\Model\Entity\Empresa get($primaryKey, $options = [])
 * @method \App\Model\Entity\Empresa newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Empresa[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Empresa|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Empresa saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Empresa patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Empresa[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Empresa findOrCreate($search, callable $callback = null, $options = [])
 */
class EmpresasTable extends Table
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

        $this->setTable('empresas');
        $this->setDisplayField('nome_empresa');
        $this->setPrimaryKey('id');

//
//        $this->addBehavior('Josegonzalez/Upload.Upload', [
//            'capa' => [
//                'fields' => [
//                    // if these fields or their defaults exist
//                    // the values will be set.
//                    'dir' => 'capa_dir', // defaults to `dir`
//                    'size' => 'capa_size', // defaults to `size`
//                    'type' => 'capa_type', // defaults to `type`
//                ],
//            ],
//        ]);


        $this->belongsTo('Categorias', [
            'foreignKey' => 'categoria_id',
            'joinType' => 'INNER'
        ]);
        $this->hasMany('Servicos', [
            'foreignKey' => 'empresa_id'
        ]);

        $this->hasMany('Videos',[
            'foreignKey' => 'empresa_id'
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
            ->scalar('nome_empresa')
            ->maxLength('nome_empresa', 255)
            ->requirePresence('nome_empresa', 'create')
            ->allowEmptyString('nome_empresa', false);

        $validator
            ->scalar('nome_servico')
            ->maxLength('nome_servico', 255)
            ->requirePresence('nome_servico', 'create')
            ->allowEmptyString('nome_servico', false);

        $validator
            ->scalar('descricao_servico')
            ->allowEmptyString('descricao_servico');

        $validator
            ->scalar('tel_contato')
            ->maxLength('tel_contato', 255)
            ->allowEmptyString('tel_contato');

        $validator
            ->scalar('tel_whats')
            ->maxLength('tel_whats', 255)
            ->allowEmptyString('tel_whats');

        $validator
            ->scalar('facebook')
            ->maxLength('facebook', 255)
            ->allowEmptyString('facebook');

        $validator
            ->scalar('instagram')
            ->maxLength('instagram', 255)
            ->allowEmptyString('instagram');

        $validator
            ->email('email')
            ->allowEmptyString('email');

        $validator
            ->scalar('site')
            ->maxLength('site', 255)
            ->allowEmptyString('site');

        $validator
            ->scalar('endereco')
            ->maxLength('endereco', 255)
            ->allowEmptyString('endereco');

//        $validator
//            ->allowEmptyString('capa');


        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->isUnique(['email']));
        $rules->add($rules->existsIn(['categoria_id'], 'Categorias'));

        return $rules;
    }
}
