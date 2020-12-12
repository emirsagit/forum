@extends('admin.layouts.app')

@section('body')


<admin-users :data-users="{{ $users }}"></admin-users>

@endsection