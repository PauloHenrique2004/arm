<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\CestasTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\CestasTable Test Case
 */
class CestasTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\CestasTable
     */
    public $Cestas;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Cestas',
        'app.ProdutoImages'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Cestas') ? [] : ['className' => CestasTable::class];
        $this->Cestas = TableRegistry::getTableLocator()->get('Cestas', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Cestas);

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
