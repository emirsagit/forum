@extends('admin.layouts.app')

@section('body')


<admin-threads :data-threads="{{ $threads }}" :data-channels="{{ $channels }}"></admin-threads>

@endsection