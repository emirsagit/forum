@extends('layouts.app')

@section('content')
<div class="min-h-screen tracking-wide">
    <h1 class="p-4 text-3xl text-center">YAZILARIMIZ</h1>
    <blogs :data-blogs="{{ $blogs->toJson() }}" :data-trendings="{{ $trendings->toJson() }}" :data-threads="{{ $threads->toJson() }}"></blogs>
</div>

@endsection