@extends('admin.layouts.app')

@section('body')


<admin-puzzles :data-puzzles="{{ $puzzles }}" :data-levels="{{ $levels }}"></admin-puzzles>

@endsection