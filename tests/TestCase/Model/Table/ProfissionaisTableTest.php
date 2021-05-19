<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ProfissionaisTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ProfissionaisTable Test Case
 */
class ProfissionaisTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\ProfissionaisTable
     */
    public $Profissionais;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Profissionais'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Profissionais') ? [] : ['className' => ProfissionaisTable::class];
        $this->Profissionais = TableRegistry::getTableLocator()->get('Profissionais', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Profissionais);

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
