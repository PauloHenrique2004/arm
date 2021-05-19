<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ExamesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ExamesTable Test Case
 */
class ExamesTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\ExamesTable
     */
    public $Exames;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Exames'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Exames') ? [] : ['className' => ExamesTable::class];
        $this->Exames = TableRegistry::getTableLocator()->get('Exames', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Exames);

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
