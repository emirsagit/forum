@extends('admin.layouts.app')

@section('body')

<channels :data-channels="{{ $channels }}"></channels>

@endsection