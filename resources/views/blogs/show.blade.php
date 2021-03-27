@extends('layouts.app')

@section('content')
<div class="pb-24">
    <blog :data-blog="{{ $blog }}" :data-blogs="{{ $blogs }}"></blog>
</div>
@endsection