@extends('layouts.app')

@section('content')
    <signin :login="control.login = true" @hide="hide"></signin>
@endsection
