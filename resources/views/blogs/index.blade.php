@extends('layouts.app')

@section('content')
<div class="min-h-screen tracking-wide">
    <nav-channels :channels= "{{ $channels->toJson() }}"></nav-channels>
    <blogs :data-blogs="{{ $blogs->toJson() }}" :data-trendings="{{ $trendings->toJson() }}" :data-threads="{{ $threads->toJson() }}"></blogs>
</div>

@endsection