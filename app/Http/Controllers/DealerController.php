<?php

namespace App\Http\Controllers;

use App\Models\Dealer;
use App\Models\State;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class DealerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data = Dealer::all();
            return DataTables::of($data)
                ->addIndexColumn()
                ->addColumn('action', function (Dealer $dealer) {
                    $actionBtn = '';

                    $edit_button =
                '<a href="' . route('dealers.edit', $dealer->id) . '" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                    <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
                    <span class="svg-icon svg-icon-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"></path>
                            <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                </a>';

                    $delete_button = '<a href="#" data-id="' . route('dealers.destroy', $dealer->id) . '" class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1 delete_dealer">
                    <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
                    <span class="svg-icon svg-icon-3">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor"></path>
							<path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor"></path>
							<path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor"></path>
						</svg>
					</span>
                    <!--end::Svg Icon-->
                </a>';
                    return $edit_button . " " . $delete_button;
                })
                ->editColumn('active', function (Dealer $dealer) {
                    if ($dealer->status == '1') {
                        return 'Active';
                    } else {
                        return 'De-Active';
                    }
                })
                ->make(true);
        } else {
            return view('theme.dealers.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $states = State::where('status', 1)->get();
        return view('theme.dealers.create', compact('states'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'first_name' => 'required|max:50',
                'last_name' => 'required|max:50',
                'licence' => 'required|max:50',
                'address' => 'required|max:250',
                'state' => 'required|max:50',
                'inventory_location' => 'required',
                'contact_first_name' => 'required|max:50',
                'contact_last_name' => 'required|max:50',
                'mobile' => 'required',
                'email' => 'required|max:160',
                'carfax_api' => 'required',
                'autocheck_api' => 'required',
                'billtrust_account' => 'required',
            ],
        );
        $data = $request->all();

        $result = Dealer::create($data);

        if ($result) {
            return redirect()->route('dealers.create')
                ->with('success', "Dealer Created");
        } else {
            return redirect()->route('dealers.create')
                ->with('error', "Something Went Wrong");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dealer  $dealer
     * @return \Illuminate\Http\Response
     */
    public function show(Dealer $dealer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dealer  $dealer
     * @return \Illuminate\Http\Response
     */
    public function edit(Dealer $dealer)
    {
        $states = State::where('status', 1)->get();
        return view('theme.dealers.edit', compact('dealer', 'states'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dealer  $dealer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Dealer $dealer)
    {
        $request->validate(
            [
                'first_name' => 'required|max:50',
                'last_name' => 'required|max:50',
                'licence' => 'required|max:50',
                'address' => 'required|max:50',
                'state' => 'required|max:50',
                'inventory_location' => 'required',
                'contact_first_name' => 'required|max:50',
                'contact_last_name' => 'required|max:50',
                'mobile' => 'required',
                'email' => 'required|max:160',
                'carfax_api' => 'required',
                'autocheck_api' => 'required',
                'billtrust_account' => 'required',
            ],
        );
        $data = $request->all();

        $result = $dealer->update($data);

        if ($result) {
            return redirect()->route('dealers.index')
                ->with('success', "Dealer Updated");
        } else {
            return redirect()->route('dealers.index')
                ->with('error', "Something Went Wrong");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dealer  $dealer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dealer $dealer)
    {
        //
        $delete_dealer = $dealer->delete();
        if ($delete_dealer) {
            return response()->json([
                'status' => 1,
                'result' => 'Success',
                'message' => "Deleted",
            ]);
        } else {
            return response()->json([
                'status' => -1,
                'result' => 'fail',
                'message' => "Not Deleted",
            ]);
        }
    }
}
