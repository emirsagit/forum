@extends('layouts.app')

@section('content')

<threads :threads="{{ $threads }}"></threads>

@endsection
