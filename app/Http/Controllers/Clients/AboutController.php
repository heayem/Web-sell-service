<?php

namespace App\Http\Controllers\Clients;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('AboutUsPage/Index');
    }
}
