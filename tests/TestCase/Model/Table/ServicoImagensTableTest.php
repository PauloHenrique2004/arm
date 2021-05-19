<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ServicoImagensTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ServicoImagensTable Test Case
 */
class ServicoImagensTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\ServicoImagensTable
     */
    public $ServicoImagens;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.ServicoImagens',
        'app.Servicos'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('ServicoImagens') ? [] : ['className' => ServicoImagensTable::class];
        $this->ServicoImagens = TableRegistry::getTableLocator()->get('ServicoImagens', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ServicoImagens);

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

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
