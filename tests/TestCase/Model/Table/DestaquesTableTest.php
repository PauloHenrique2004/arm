<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\DestaquesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\DestaquesTable Test Case
 */
class DestaquesTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\DestaquesTable
     */
    public $Destaques;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Destaques',
        'app.Empresas'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Destaques') ? [] : ['className' => DestaquesTable::class];
        $this->Destaques = TableRegistry::getTableLocator()->get('Destaques', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Destaques);

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
