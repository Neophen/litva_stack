<?php
// Helpers here serve as example. Change to suit your needs.

// For a real-world example check here https://github.com/wp-bond/bond/blob/master/src/Tooling/Vite.php

use Illuminate\Support\Facades\Log;

function logAnything($message): void
{
    Log::debug(print_r($message, true));
}

function getIsInDevelopment()
{
    return config('app.env') == 'local';
}

// Vite Client that must be loaded during development
function viteClient(): string
{
    // not required on production
    if (!getIsInDevelopment()) {
        return "";
    }
    return '<script type="module" src="http://localhost:3000/@vite/client"></script>';
}


// Helper to output style tag
function viteCss(string $name): string
{
    // not needed on dev, it's inject by Vite
    if (getIsInDevelopment()) {
        return "";
    }

    $jsAsset = viteAsset($name . '.css');
    return "<link rel=\"stylesheet\" href=\"{$jsAsset}\">";
}

// Helper to output the script tag
function viteJs(string $name): string
{
    $jsAsset = viteAsset($name . '.js');
    return "<script type=\"module\" src=\"{$jsAsset}\"></script>";
}

// Helper to locate files
function viteAsset(string $filename): string
{
    // Let Vite handle during dev
    if (getIsInDevelopment()) {
        return 'http://localhost:3000/' . $filename;
    }

    // Locate hashed files in production
    $manifest = json_decode(file_get_contents(
        public_path() . '/dist/_assets/manifest.json'
    ), true);

    return '/dist/_assets/'
        . ($manifest[$filename] ?? $filename);
}
