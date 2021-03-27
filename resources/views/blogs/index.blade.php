@extends('layouts.app')

@section('content')
<div class="pb-24 min-h-screen tracking-wide">
    <nav-channels></nav-channels>
    <blogs :data-blogs="{{ $blogs->toJson() }}" :data-trendings="{{ $trendings->toJson() }}" :data-threads="{{ $threads->toJson() }}"></blogs>
</div>

@endsection