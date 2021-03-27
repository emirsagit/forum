@extends('layouts.app')
@section('head')
<title>
    {{ $level->seo_title }}
</title>
<meta name="description" content="{{ $level->seo_description }}">
@endsection
@section('content')
<div class="pb-24 min-h-screen bg-white">
    <div class="flex w-full h-24 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 text-center">
        <div class="flex m-auto">
            <h1 class="text-2xl">{{ $level->name }} Kategorisindeki Bilmeceler</h1>
        </div>
    </div>
    <puzzle :data-puzzles="{{ $puzzles }}" :data-level="{{ $level }}" :data-levels="{{ $levels }}"></puzzle>
</div>
@endsection