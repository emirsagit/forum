@extends('layouts.app')

@section('content')
    <signin :login="control.login" @hide="hide"></signin>
@endsection
