<?php

namespace App\Http\Controllers;

use App\Models\ItemOption;
use App\Models\InspectionItem;
use App\Models\InspectionLocation;
use App\Models\InspectionType;
use App\Models\ItemOptionAttribute;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;

class ItemOptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data = ItemOption::all();
            return DataTables::of($data)
                ->addIndexColumn()
                ->addColumn('action', function (ItemOption $item) {
                    $actionBtn = '';

                    $edit_button = '<a href="' . route('inspection-item-option.edit', $item->id) . '" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                    <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
                    <span class="svg-icon svg-icon-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"></path>
                            <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                    </a>';

                    $delete_button = '<a href="#" data-id="' . route('inspection-item-option.destroy', $item->id) . '" class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1 delete_item">
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
                ->addColumn('active', function (ItemOption $item) {
                    if ($item->status == '1') {
                        $active = '<span class="badge badge-success">Active</span>';
                    } else {
                        $active = '<span class="badge badge-danger">De-Active</span>';
                    }
                    return $active;
                })
                ->editColumn('item_name', function (ItemOption $item) {
                    if (isset($item->itemName['name'])) {
                        return $item->itemName['name'];
                    } else {
                        return '-';
                    };
                })
                ->editColumn('location_name', function (ItemOption $item) {
                    if (isset($item->locationName['name'])) {
                        return $item->locationName['name'];
                    } else {
                        return '-';
                    };
                })
                ->editColumn('type_name', function (ItemOption $item) {
                    if (isset($item->typeName['type'])) {
                        return $item->typeName['type'];
                    } else {
                        return '-';
                    };
                })
                ->rawColumns(['action', 'active'])
                ->make(true);
        } else {
            return view('theme.item_option.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $locations = InspectionLocation::where('status', 1)->get();
        return view('theme.item_option.create', compact('locations'));
    }

    public function get_inspection_items($id)
    {
        $types = InspectionItem::where('status', 1)->where('inspection_type_id', $id)->get();
        $type_box = '<option value="">Select Inspection Item...</option>';
        foreach ($types as $type) {
            $type_box .= '<option value="' . $type->id . '">' . $type->name . '</option>';
        }
        echo json_encode(array('status' => 1, 'data' => $type_box));
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
                'inspection_location_id' => 'required',
                'inspection_type_id' => 'required',
                'inspection_item_id' => 'required',
            ],
        );


        $data = $request->all();
        $result = ItemOption::create($data);
        if ($result) {
            foreach ($request->kt_docs_repeater_advanced as $item) {
                $datas = [
                    'item_option_id' => $result->id,
                    'label' => $item['name'],
                    'label_type' => ($item['parent_input_option'] == 1) ? "checkbox" : "input",
                    'label_options' => ($item['parent_input_option'] != 1) ? null :  json_encode(array(
                        'option_label' => $item['option_label'],
                        'option_value' => $item['option_value'],
                        'option_label2' => $item['option_label2'],
                        'option_value2' => $item['option_value2'],
                    ))
                ];
                $result_sub = ItemOptionAttribute::create($datas);
            }

            if ($result_sub) {
                return redirect()->route('inspection-item-option.index')
                    ->with('success', "Item Option Created");
            } else {
                return redirect()->route('inspection-item-option.create')
                    ->with('error', "Something Went Wrong");
            }
        } else {
            return redirect()->route('inspection-item-option.create')
                ->with('error', "Something Went Wrong");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ItemOption  $itemOption
     * @return \Illuminate\Http\Response
     */
    public function show(ItemOption $itemOption)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ItemOption  $itemOption
     * @return \Illuminate\Http\Response
     */
    public function edit(ItemOption $itemOption, $id)
    {
        $item_option = ItemOption::find($id);
        $locations = InspectionLocation::where('status', 1)->get();
        $types = InspectionType::where('status', 1)->where('location_id', $item_option->inspection_location_id)->get();
        $items = InspectionItem::where('status', 1)->where('inspection_type_id', $item_option->inspection_type_id)->get();
        $optionAttributes = ItemOptionAttribute::where('item_option_id', $item_option->id)->get();
        return view('theme.item_option.edit', compact('item_option', 'items', 'locations', 'types', 'optionAttributes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ItemOption  $itemOption
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ItemOption $itemOption, $id)
    {
        $request->validate(
            [
                'inspection_location_id' => 'required|integer',
                'inspection_type_id' => 'required|integer',
                'inspection_item_id' => 'required|integer',
            ],
        );

        $data = $request->all();
        $itemOption = ItemOption::findOrFail($id);
        $itemOption->inspection_location_id = $request->inspection_location_id;
        $itemOption->inspection_type_id = $request->inspection_type_id;
        $itemOption->inspection_item_id = $request->inspection_item_id;
        $itemOption->status = $request->status;
        $result = $itemOption->save();
        if ($result) {
            $a = $itemOption->itemAttribute()->delete();
            foreach ($request->kt_docs_repeater_advanced as $item) {
                $datas = [
                    'item_option_id' => $id,
                    'label' => $item['name'],
                    'label_type' => ($item['parent_input_option'] == 1) ? "checkbox" : "input",
                    'label_options' => ($item['parent_input_option'] != 1) ? null :  json_encode(array(
                        'option_label' => $item['option_label'],
                        'option_value' => $item['option_value'],
                        'option_label2' => $item['option_label2'],
                        'option_value2' => $item['option_value2'],
                    ))
                ];
                $result_sub = ItemOptionAttribute::create($datas);
            }
            return redirect()->route('inspection-item-option.index')
                ->with('success', "Item Option Updated");
        } else {
            return redirect()->back()
                ->with('error', "Something Went Wrong");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ItemOption  $itemOption
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = ItemOption::find($id);
        $delete_item = $item->delete();
        if ($delete_item) {
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
