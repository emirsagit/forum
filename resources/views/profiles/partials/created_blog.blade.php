@component('profiles.partials.activity')
@slot('heading')
<div class="flex flex-1 flex-row">
    {{-- <a href="{{ $activity->subject->path() }}" class="cursor-pointer mb-2 underline text-blue-600 hover:text-blue-800"> --}}
        <h3 class="text-l flex-1 text-blue-800">
            {{ $activity->subject->title }}</a> blog yazısını oluşturdu.</h3>
    {{-- </a> --}}
</div>
@endslot

@slot('body')

@endslot

@endcomponent