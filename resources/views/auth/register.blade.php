@extends('layouts.app')

@section('content')
<register :register="control.register = true" @hide="hide"></register>
@endsection
