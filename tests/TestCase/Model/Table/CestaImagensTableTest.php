<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\CestaImagensTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\CestaImagensTable Test Case
 */
class CestaImagensTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\CestaImagensTable
     */
    public $CestaImagens;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.CestaImagens'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('CestaImagens') ? [] : ['className' => CestaImagensTable::class];
        $this->CestaImagens = TableRegistry::getTableLocator()->get('CestaImagens', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->CestaImagens);

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
