<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ExposicoesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ExposicoesTable Test Case
 */
class ExposicoesTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\ExposicoesTable
     */
    public $Exposicoes;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Exposicoes'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Exposicoes') ? [] : ['className' => ExposicoesTable::class];
        $this->Exposicoes = TableRegistry::getTableLocator()->get('Exposicoes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Exposicoes);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
