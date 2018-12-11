import { PatternValidator } from "@angular/forms";

export const MESSAGE_VALIDATION = {
    ngayDieuChinh: {// name control
        required: 'Bạn phải chọn Ngày điều chỉnh'// rule with msg
    },
    soQDdieuChinh: {
        required: 'Bạn phải nhập Số quyết định'
    },
    lyDoDieuChinh: {
        required: 'Bạn phải nhập Lý do điều chỉnh'
    },
    ngayBatDau: {
        dateFrom: 'Ngày bắt đầu không được lớn hơn ngày kết thúc'
    },
    ngayKetThuc: {
        dateTo: 'Ngày kết thúc không được nhỏ hơn ngày bắt đầu'
    },
    ngayCoHieuLuc: {
        dateFrom: 'Ngày có hiệu lực không được lớn hơn ngày hết hiệu lực'
    },
    ngayHetHieuLuc: {
        dateTo: 'Ngày hết hiệu lực không được nhỏ hơn ngày có hiệu lực'
    },
    hieuLucUyQuyenFrom: {
        dateFrom: 'Ngày có hiệu lực không được lớn hơn ngày hết hiệu lực ủy quyền'
    },
    hieuLucUyQuyenTo: {
        dateTo: 'Ngày hết hiệu lực không được nhỏ hơn ngày có hiệu lực ủy quyền'
    },
    dmTinhHuyenId: {
        required: 'Tỉnh, thành phố không được bỏ trống'
    },
    hoVaTen:{
        required: 'Bạn phải nhập vào họ tên',
        pattern: 'Bạn không được để khoảng trắng'
    },
    chucVuDoan: {
        required: 'Chức vụ đoàn không được để trống',
        pattern: 'Bạn không được để khoảng trắng'
    },
    chucVuCongTac: {
        required: 'Chức vụ công tác không được để trống',
        pattern: 'Bạn không được để khoảng trắng'
    },
    loaiHinh_InForm: {
        required: 'Loại hình TTKT không được để trống'
    },
    ngayBatDau_InForm:{
        required: 'Ngày bắt đầu không được để trống'
    },
    ngayKetThuc_InForm:{
        required: 'Ngày kết thúc không được để trống',
        dateTo: 'Ngày kết thúc không được nhỏ hơn ngày bắt đầu'
    },
    dvChuTri_InForm:{
        required: 'Đơn vị chủ trì không được để trống'
    }, 
    tenBaoCao:{
        required : 'Bạn không được bỏ trống trường này',
        pattern:'Bạn không được để khoảng trắng'
    },
    denNgay:{
        required : 'Bạn không được bỏ trống trường này',
        pattern:'Bạn không được để khoảng trắng'
    },
    tuNgay:{
        required : 'Bạn không được bỏ trống trường này',
        pattern:'Bạn không được để khoảng trắng'
    },
    donViPhoiHop: {
        required : 'Bạn chưa chọn đơn vị phối hợp'
    },
    soNguoi: {
        max: 'Số người không thể vượt quá Danh sách doàn viên'
    },
}

export const MESSAGE_VALIDATION_RULE = {
    required: 'This field is required',
    maxlength: 'Too long',
    minlength: 'Too short'
}




