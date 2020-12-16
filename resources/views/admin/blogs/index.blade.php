@extends('admin.layouts.app')

@section('body')


<admin-blogs :data-blogs="{{ $blogs }}" :data-channels="{{ $channels }}"></admin-blogs>

@endsection