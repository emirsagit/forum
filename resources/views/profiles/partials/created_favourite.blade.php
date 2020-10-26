@component('profiles.partials.activity')
@slot('heading')
<a href="{{ $activity->subject->favourited->path() }}" class="cursor-pointer mb-2 underline text-blue-600 hover:text-blue-800">
    <h3 class="text-l flex-1">
        {{ $user->name }} yapılan yorumu beğendi</h3></a>
@endslot

@slot('body')
<p class="text-sm text-gray-700">{{ $activity->subject->favourited->body }}</p>
@endslot

@endcomponent
