export type TimeDistance = { ngay: number; gio: number; phut: number };
export function timeDistance(passTime: string): TimeDistance {
  const ngayTruocDate = new Date(passTime);
  const ngayHienTai = new Date();

  const khoangCachMillis = ngayHienTai.getTime() - ngayTruocDate.getTime();
  const khoangCachNgay = Math.floor(khoangCachMillis / (1000 * 60 * 60 * 24));
  const khoangCachGio = Math.floor(
    (khoangCachMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const khoangCachPhut = Math.floor(
    (khoangCachMillis % (1000 * 60 * 60)) / (1000 * 60)
  );

  //return `Khoảng cách từ ${passTime} đến hiện tại là ${khoangCachNgay} ngày, ${khoangCachGio} giờ, ${khoangCachPhut} phút.`;
  return {
    ngay: khoangCachNgay,
    gio: khoangCachGio,
    phut: khoangCachPhut,
  } as TimeDistance;
}

// Ví dụ sử dụng
// console.log(timeDistance("2024-05-15"));
