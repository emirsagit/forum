@extends('admin.layouts.app')

@section('body')


<admin-levels :data-levels="{{ $levels }}"></admin-levels>

@endsection