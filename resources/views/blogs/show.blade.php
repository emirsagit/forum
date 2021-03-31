@extends('layouts.app')

@section('content')
<div>
    <blog :data-blog="{{ $blog }}" :data-blogs="{{ $blogs }}"></blog>
</div>
@endsection