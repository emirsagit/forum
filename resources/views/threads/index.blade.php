@extends('layouts.app')

@section('content')

<threads :data="{{ $threads->toJson() }}"></threads>
<div class="flex flex-row lg:w-4/5 lg:m-auto mb-4">
    <div class="lg:w-1/4">
        
    </div>
    <div class="lg:w-3/4 m-auto">
        {{ $threads->withQueryString()->links() }}
    </div>
</div>


@endsection
