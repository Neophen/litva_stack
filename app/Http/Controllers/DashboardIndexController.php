<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardIndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('DashboardIndex', [
            'testProp' => 'this is received from the server',
        ]);
    }
}
