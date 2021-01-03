<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardIndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Dashboard/Index', [
            'testProp' => 'this is received from the server',
        ]);
    }
}
