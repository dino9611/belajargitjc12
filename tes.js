class Penjumlahan {
    constructor(nama,usia){
        this.nama=nama
        this.usia=usia
    }
    tambah(a,b){    
        return (a+b)
    }
    static kurang(a,b){
        return a-b

    }
}

class Pegawai extends Penjumlahan{
    constructor(nip,namapeg,usiapeg,jabatan){
        super(namapeg,usiapeg)
        this.nip=nip
        this.jabatan=jabatan
    }
}


var obj=new Penjumlahan('budi',14)
console.log(obj)
console.log({nama:'dasd',usia:13,fungsi:()=>'tes'})
console.log(Penjumlahan.kurang(2,4))
// var obj1=new Pegawai('01234','deni',19,'ceo')
// console.log(obj1)