import { CurrencyMaskConfig } from "ng2-currency-mask";
export const SUCCESS_RESPONSE = "Success";
export const DUPLICATE_RESPONE = "Duplicate";
export const NOTFOUND_RESPONE = "NotFound";
export const SUCCESS_NOTICE = "Thành công!";
export const ERROR_NOTICE = "Lỗi!";
export const WARNING_NOTICE = "Cảnh báo!";
export const TITLE_NOTICE = "Thông báo!";
export const LOAI_USER = 2;

export const PAGE_SIZE = 10;

export const WIDTH_DIALOG = "80%";
export const HEIGHT_DIALOG = "100%";
export const SEARCH_LABEL = "Tìm kiếm";
export const REFRESH_LABEL = "Làm mới";
export const ADDNEW_LABEL = "Thêm mới";
export const EDIT_LABEL = "Sửa";
export const DETAIL_LABEL = "Xem";
export const DELETE_LABEL = "Xóa";
export const GRID_PAGESIZES = [
  { text: "10", value: 10 },
  { text: "20", value: 20 },
  { text: "50", value: 50 },
  { text: "100", value: 100 },
];
export const GRID_HEIGHT = 510;
export const LBL_DISPLAY = {
  syncNgsp: "Đồng bộ NGSP",
  add: "Thêm mới",
  edit: "Sửa",
  update: "Cập nhập",
  delete: "Xóa",
  view: "Xem",
  search: "Tìm kiếm",
  save: "Lưu",
  close: "Đóng",
  back: "Quay lại",
  refresh: "Làm mới",
  file: "Chọn file",
  download: "Tải xuống",
  apidata: "Dữ liệu API",
  confirm: "Xác nhận",
  cancel: "Huỷ",
  print: "In",
  TITLE_NOTICE: "Thông báo ",
  chooseImportFile: "Chọn file import",
  downloadTemplate: "Tải file template",
  importFile: "Import",
  config: "Cấu hình",
  Message_Save_New_Success: "thêm mới dữ liệu thành công! ",
  Message_Edit_New_Success: "Sửa dữ liệu thành công! ",
  Message_Delete_Success: "Xoá dữ liệu thành công! ",
  Message_Dialog_Confirmation_Delete: "Bạn có chắc chắn xoá không ?",
};

export const RoleAuth = {
  Xem: '1',
  Them: '2',
  Sua: '3',
  Xoa: '4',
  DongBo: '5',
  Duyet: '6',
};
export const TYPECODE = {
  DMNGUOIVC: "DMNGUOIVC",
  VATTUCHUNGTU: "VATTUCHUNGTU",
  SANPHAM: "SANPHAM",
  DH: "DONHANG",
  DS: "DS",
  PT: "KETTOAN.PT",
  PC: "KEROAN.PC"
};

export const TYPE_GENCODE = {
  SHIPPINGCARD: "shippingcard"
}

export const MD_BUILDER = {
  SYSUNIT: "APPQTH.SYSUNIT",
  TRANSPORT_DICHVUVC : "TRANSPORT.DICHVUVC"
};

export const TYPEFILE = {
  VATTUGIACA: "VATTUGIACA",
  VATTUGIACAAVARTAR: "VATTUGIACAAVARTAR",
  VATTUAVARTAR: "VATTUAVARTAR",
  TINTUCBAIVIET: "TINTUCBAIVIET",
  CHAT: "CHAT"
};

export const LOAICT = {
  PHIEUTHU: "PT",
  PHIEUCHI: "PC"
}

export const STATUS_ACTION = {
  create: 0,
  edit: 1,
  detail: 2,
  delete: 3,
  swap: 4,
  print: 5,
  send: 6,
};

export const STATUS = [
  {
    id: 1,
    name: "Sử dụng",
  },
  {
    id: 2,
    name: "Không sử dụng",
  },
];

export const STATUS_BUUCUC = [
  {
    value: 1,
    text: "Hoạt động"
  },
  {
    value: 0,
    text: "Không hoạt động"
  }
];

export const LIST_PROBLEM = [
  {
    value: "1",
    text: "Hối giao/ lấy / trả hàng"
  },
  {
    value: "2",
    text: "Thay đổi thông tin người nhận"
  },
  {
    value: "3",
    text: "Khiếu nại"
  },
  {
    value: "4",
    text: "Khác (chưa phân loại)"
  }
];

export const LIST_HANDLE = [
  {
    value: 1,
    text: "Chọn đơn vị gom hàng"
  },
  {
    value: 2,
    text: "Đổi đơn vị giao hàng"
  },
  {
    value: 3,
    text: "Xử lý sửa code, các yêu cầu hối lấy hàng, giao hàng..."
  },
];

export const STATUS_DELETE = 99;

export const KENDO_GRID_MESSAGE = {
  pagerOf: "trong",
  pagerItems: "bản ghi",
  pagerItemsPerPage: "Số bản ghi trong 1 trang",
  groupPanelEmpty: "Kéo tiêu đề cột và thả vào đây để nhóm dữ liệu theo cột",
  filterEqOperator: "Bằng",
  filterNotEqOperator: "Không bằng",
  filterContainsOperator: "Chứa",
  filterNotContainsOperator: "Không chứa",
  filterStartsWithOperator: "Bắt đầu với",
  filterEndsWithOperator: "Kết thúc với",
  filterIsNullOperator: "Vô giá trị",
  filterIsNotNullOperator: "Có giá trị",
  filterIsEmptyOperator: "Rỗng",
  filterIsNotEmptyOperator: "Không rỗng",
  noRecords: "Không có bản ghi nào được tìm thấy",
};

export const LOAIDONVI = {
  Vanchuyen: 0,
  Shop: 1,
  NCC: 2,
};

export const TYPE_SYSUNIT = {
  TypeShop: 1,
  TypeBuuCuc: 4,
  TypeDonViVanChuyen: 0
}

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 0,
  prefix: "",
  suffix: "",
  thousands: ".",
};

export const NameGroupStatus = [
  {
    value: 0,
    text: "Gom hàng",
  },
  {
    value: 1,
    text: "Giao hàng",
  },
  {
    value: 2,
    text: "Sau giao hàng",
  },
];

export const STATUSVC = [
  { value: 1, text: "Lưu nháp", color: '#59a9ff' },
  { value: 2, text: "Đơn hủy", color: '#ff6358' },
  { value: 3, text: "Chờ xác nhận đơn hàng", color: '#59a9ff' },
  { value: 4, text: "Đã xác nhận đơn hàng", color: '#59a9ff' },
  { value: 5, text: "Đơn hàng bị hủy", color: '#ff6358' },
  { value: 6, text: "Đang chuẩn bị hàng", color: '#59a9ff' },
  { value: 7, text: "Chờ lấy hàng", color: '#59a9ff' },
  { value: 8, text: "Đang đấy hàng", color: '#59a9ff' },
  { value: 9, text: "Lấy hàng thành công", color: '#59a9ff' },
  { value: 10, text: "Lấy hàng thất bại", color: '#ff6358' },
  { value: 11, text: "Nhập kho bưu cục - Chờ xử lý", color: '#59a9ff' },
  { value: 12, text: "Đang trung chuyển đến", color: '#59a9ff' },
  { value: 13, text: "Nhập kho bưu cục - chờ vận chuyển", color: '#59a9ff' },
  { value: 14, text: "Đang giao hàng", color: '#59a9ff' },
  { value: 15, text: "Giao hàng thành công", color: '#5bb974' },
  { value: 16, text: "Giao hàng thất bại", color: '#ff6358' },
  { value: 17, text: "Hoãn giao hàng", color : '#ff9758' },
  { value: 18, text: "Hoãn giao hàng - Hẹn giao lại sau", color : '#ff9758' },
  { value: 19, text: "Đã tạo đơn hàng Chuyển hoàn", color: '#59a9ff' },
  { value: 20, text: "Đang trung chuyển hoàn hàng", color : '#ff9758' },
  { value: 21, text: "Đang phân loại hoàng hàng", color : '#ff9758' },
  { value: 22, text: "Đang hoàn hàng", color : '#ff9758' },
  { value: 23, text: "Hoàn hàng thành công", color: '#5bb974' },
  { value: 24, text: "Hoàn hàng không thành công", color : '#ff9758' },
  { value: 31, text: "Đã nhập kho hoàn hàng", color : '#ff9758' },
  { value: 32, text: "Đơn hàng đã hủy", color: '#ff6358' },
  { value: 33, text: "Hoãn lấy hàng", color : '#ff9758' },
  { value: 34, text: "Đã đối soát giao hàng", color: '#59a9ff' },
  { value: 35, text: "giao hàng thất bại - nhập kho chờ xử lý", color: '#ff6358' },
];

export const HINHTHUCTT = [
  { value: 1, text: 'Tiền mặt'},
  { value: 2, text: 'Chuyển khoản'}
]

export const ChooseTransport = [
  { value: 1, text: "Đồng kiểm, không thử hàng" },
  { value: 2, text: "Cho thử hàng" },
  { value: 3, text: "Không cho xem hàng" },
];

export const ChoosePayment = [
  { value: 0, text: "Bên gửi trả phí" },
  { value: 1, text: "Bên nhận trả phí" },
];

export const CAUHINHTHUHO = [
  { value: 0, text: "Thu hộ = Tiền hàng  + Phí" },
  { value: 1, text: "Thu hộ = Tiền hàng" },
]

export const VATTUCHUNGTU = {
  XTRA: "XTRA",
  XNHAP: "XNHAP",
  XLE: "XLE",
  XBUON: "XBUON",
  XBAN: "XBAN",
};

export const LOAIUSER = {
  AdminTong: 0,
  AdminDonvi: 1,
  Nv: 2,
  nguoivanchuyen: 3,
};

export const UNITTYPE = {
  DVVC: 0,
  SHOP: 1,
  NHACUNGCAP: 2,
  BUUCUC: 3
}

export const UpdateNguoiVanChuyen_Type = {
  GomHangNoiBo: 0,
  GiaoHangNoiBo: 1,
}
export interface Confirm {
  icon: string;
  title: string;
  message: string;
  color: string;
  isAppend: boolean;
  type: number; // 0: accept; 1: cancel;
}

export const Role = {
  isView: '1',
  isAdd: '2',
  isEdit: '3',
  isDelete: '4'
}

export const STATUS_CONTROL_SHIP = [
  {value: 1, text: "Đã hoàn thành"},
  {value: 0, text: "Chưa hoàn thành"}
]

export const NGUONDON = [
  { value: 0, text: "Post" },
  { value: 1, text: "Transport" },
]


export const TRANGTHAIDOISOAT = {
  CHUAXULY: 1,
  DANGXULY: 2,
  DATHANHTOAN: 3,
  CHUYENKYSAU: 4,
};

export const LSTTRANGTHAIDOISOAT = [
  { value: 1, text: "Chưa thu tiền" },
  { value: 2, text: "Đã thu tiền" },
];

export const STATUS_CONTROL_NVC = [
  {value: 0, text: "--Tất cả--"},
  {value: 1, text: "Chưa xử lý"},
  {value: 2, text: "Đang xử lý"},
  {value: 3, text: "Đã thanh toán"},
  {value: 4, text: "Chuyển kỳ sau"}
]