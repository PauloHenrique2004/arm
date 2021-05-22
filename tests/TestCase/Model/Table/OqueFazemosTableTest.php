<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\OqueFazemosTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\OqueFazemosTable Test Case
 */
class OqueFazemosTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\OqueFazemosTable
     */
    public $OqueFazemos;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.OqueFazemos'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('OqueFazemos') ? [] : ['className' => OqueFazemosTable::class];
        $this->OqueFazemos = TableRegistry::getTableLocator()->get('OqueFazemos', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->OqueFazemos);

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
