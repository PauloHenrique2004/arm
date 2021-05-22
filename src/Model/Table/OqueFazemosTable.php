<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * OqueFazemos Model
 *
 * @method \App\Model\Entity\OqueFazemo get($primaryKey, $options = [])
 * @method \App\Model\Entity\OqueFazemo newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\OqueFazemo[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\OqueFazemo|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\OqueFazemo saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\OqueFazemo patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\OqueFazemo[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\OqueFazemo findOrCreate($search, callable $callback = null, $options = [])
 */
class OqueFazemosTable extends Table
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

        $this->setTable('oque_fazemos');
        $this->setDisplayField('title');
        $this->setPrimaryKey('iid');
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
            ->integer('iid')
            ->allowEmptyString('iid', 'create');

        $validator
            ->scalar('title')
            ->maxLength('title', 255)
            ->allowEmptyString('title');

        $validator
            ->scalar('descricao')
            ->allowEmptyString('descricao');

        return $validator;
    }
}
