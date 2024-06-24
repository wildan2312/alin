Search.setIndex({"docnames": ["AplikasiKAL", "DeterminanMatriks", "MatriksInvers", "OperasiMatriks", "SistemLinier", "TransformasiMatriks", "UAS_KAL", "intro"], "filenames": ["AplikasiKAL.ipynb", "DeterminanMatriks.ipynb", "MatriksInvers.ipynb", "OperasiMatriks.ipynb", "SistemLinier.ipynb", "TransformasiMatriks.ipynb", "UAS_KAL.ipynb", "intro.md"], "titles": ["<strong>Aplikasi KAL</strong>", "<strong>Determinan Matriks</strong>", "<strong>Matriks Invers</strong>", "<strong>Aljabar Matriks</strong>", "<strong>Sistem Linier</strong>", "<strong>Tranformasi Matriks</strong>", "<strong>1. Hitunglah PageRank dari graph berikut</strong>", "Welcome to My Jupyter Book"], "terms": {"adalah": [0, 1, 2, 5], "kebalikan": 2, "dari": [0, 1, 2, 3, 4, 5, 7], "sebuah": [0, 2], "yang": [0, 1, 2, 3, 5], "apabila": 2, "tersebut": [0, 1, 2], "dikalikan": [0, 2], "inversnya": 2, "akan": [0, 1, 2], "menjadi": [0, 2, 3, 5, 6], "identita": [1, 2], "dilambangkan": 2, "A": [0, 2, 3, 4, 6], "1": [0, 1, 2, 4, 7], "suatu": [0, 1, 2, 3, 4], "dikatakan": 2, "memiliki": [0, 1, 2, 3], "jika": [0, 1, 2, 6], "determinan": [2, 7], "tidak": [0, 1, 2, 3, 5, 6], "sama": [0, 1, 2, 3], "nol": [2, 3], "hanya": [0, 2, 3], "ada": [0, 1, 2, 3], "pada": [0, 1, 2, 3, 5], "jumlah": [0, 2, 3], "bari": [1, 2, 3], "dan": [0, 2], "kolom": [1, 2, 3], "untuk": [0, 2, 4, 5], "nonsingular": 2, "yaitu": [2, 3], "tunggal": 2, "lebih": [0, 2], "satu": [0, 1, 2, 4, 5], "dapat": [0, 2], "b": [2, 3, 4], "c": [0, 2, 3], "keduanya": 2, "maka": [1, 2], "eliminasi": [2, 7], "metod": 2, "matemati": 2, "langkah": 2, "langkahnya": 2, "mirip": 2, "biasa": [2, 5], "tetapi": [0, 2, 3, 5], "setelah": [0, 2, 5], "berada": 2, "dalam": [0, 2, 3, 4, 5], "bentuk": [2, 5], "eselon": 2, "selanjutnya": 2, "mengubahnya": 2, "tereduksi": 2, "import": [0, 1, 2, 4, 5, 6], "numpi": [0, 1, 2, 4, 6], "np": [0, 1, 2, 4, 5, 6], "def": [2, 3, 4, 5], "rowswap": [2, 4], "k": [2, 3, 4, 5], "l": [2, 4], "temp": [2, 4], "copi": [2, 4], "rowscal": [2, 4], "scale": [2, 4], "rowadd": [2, 4], "inverse_matrix": [1, 2], "m": [2, 4], "n": [0, 2, 4, 6], "shape": [2, 3, 4, 6], "aug_matrix": 2, "hstack": 2, "ident": 2, "i": [2, 3, 4, 5, 6], "rang": [2, 3, 4, 6], "pivot_row": 2, "ab": [2, 3], "j": [2, 3, 4, 6], "inverse_a": 2, "return": [2, 3, 4, 5], "asli": [2, 5], "arrai": [0, 1, 2, 4, 5, 6], "2": [0, 1, 2, 4, 7], "0": [0, 1, 2, 3, 4, 5, 6], "5": [0, 1, 2, 3, 4, 6], "6": [0, 1, 2, 3, 6], "7": [0, 1, 2, 3], "8": [0, 1, 2, 3, 4, 6], "9": [0, 2, 3, 4], "10": [0, 1, 2, 4, 5], "11": [0, 2], "invers_a": 2, "print": [0, 1, 2, 3, 4, 5, 6], "menggunakan": [2, 5], "17142857": 2, "14285714": 2, "125": [0, 2], "1125": 2, "09090909": 2, "soal": 2, "variabel": 2, "mempresentasikan": 2, "sistem": [2, 7], "linear": 2, "kita": [2, 3], "koefisien": [2, 4], "vektor": [2, 5], "x": [2, 4, 5, 6], "konstanta": 2, "terdiri": [2, 3], "setiap": [0, 2, 3], "berisi": 2, "hasil": [0, 1, 2, 3, 5], "telah": 2, "buat": [2, 4], "sebelumnya": [0, 2], "begin": [0, 2, 3, 5], "align": 2, "x_1": [2, 4], "x_2": [2, 4], "x_3": [2, 4], "x_4": 2, "x_5": 2, "x_6": 2, "20": [0, 1, 2], "2x_1": [2, 4], "3x_3": [2, 4], "2x_4": 2, "4x_5": 2, "15": [0, 2, 4], "3x_1": 2, "2x_2": [2, 4], "3x_5": 2, "4x_1": 2, "2x_3": 2, "3x_4": 2, "2x_5": 2, "4x_6": 2, "25": [0, 2], "3x_2": 2, "4x_4": 2, "3x_6": 2, "18": [0, 2, 3], "end": [0, 2, 3, 5], "pmatrix": [2, 5], "4": [0, 1, 2, 3, 4, 6], "hitung": [1, 2, 4], "a_inv": 2, "linalg": [0, 1, 2, 4], "inv": [1, 2], "dot": [0, 2, 6], "cetak": 2, "x1": 2, "x2": 2, "x3": 2, "x4": 2, "x5": 2, "x6": 2, "53757225": 2, "8583815": 2, "96242775": 2, "65606936": 2, "37861272": 2, "53179191": 2, "susunan": 3, "bilangan": 3, "disusun": 3, "sehingga": 3, "membentuk": 3, "jajaran": 3, "persegi": 3, "panjang": 3, "seperti": [0, 3, 5], "conoh": 3, "bmatrix": [0, 3], "a1": [3, 4], "a2": [3, 4], "a3": [3, 4], "a4": [3, 4], "juga": [0, 3], "beberapa": 3, "elemen": [1, 3, 6], "penyusunnya": 3, "contoh": 3, "adlah": 3, "elemennya": 3, "contohnya": 3, "merupakan": [1, 3], "diperoleh": 3, "memindahkan": 3, "atau": [3, 5], "sebaliknya": 3, "3x2": 3, "At": 3, "pertama": 3, "baha": 3, "letak": 3, "komponennya": 3, "bedanya": 3, "dengan": [0, 1, 3, 4, 5, 7], "umumnya": 3, "haru": [1, 3], "memenuhi": 3, "syarat": 3, "ordo": [1, 3], "b1": [3, 4], "b2": [3, 4], "b3": [3, 4], "b4": 3, "halnya": 3, "diata": 3, "saja": 3, "operasinya": 3, "sendiri": 3, "prose": [0, 3], "kedua": 3, "hasilnya": 3, "kemudian": [0, 3], "dijumlahkan": [0, 3], "memperoleh": 3, "akhir": [0, 3], "2x2": [3, 5], "19": [0, 3, 4], "22": [0, 3], "50": 3, "43": 3, "No": 3, "perkalian_matrik": 3, "baris_a": 3, "len": 3, "kolom_a": 3, "baris_b": 3, "kolom_b": 3, "membuat": [0, 1, 3, 6], "ukuran": 3, "sesuai": [3, 4], "result": 3, "_": [3, 6], "dua": [3, 4], "menampilkan": [1, 3], "row": [3, 4], "33": 3, "36": 3, "26": 3, "66": 3, "42": 3, "40": 3, "39": 3, "34": 3, "selesaikan": 4, "berikut": [4, 7], "8x_1": 4, "3": [0, 1, 2, 4, 6], "penukaran": 4, "dilakukan": [0, 4], "menukar": 4, "posisi": [4, 5], "matrik": [4, 6, 7], "skalasi": 4, "melibatkan": 4, "mengalikan": 4, "skalar": 4, "penambahan": 4, "menambahkan": 4, "kelipatan": [1, 4], "ke": [0, 4, 5], "lainnya": [0, 4], "duplic": 4, "swap": 4, "number": 4, "column": 4, "astyp": 4, "float64": 4, "entri": 4, "multipli": 4, "modif": 4, "The": 4, "new": 4, "valu": 4, "old": 4, "ad": 4, "tambahkan": 4, "kali": 4, "kalikan": 4, "a5": 4, "16": [0, 4], "29": 4, "30": 4, "35": 4, "71": 4, "13": [0, 4], "33333333": [0, 1, 4], "66666667": [1, 4], "15789474": 4, "26315789": 4, "68421053": 4, "matplotlib": [4, 5], "pyplot": [4, 5], "plt": [4, 5], "from": 4, "mpl_toolkit": 4, "mplot3d": 4, "axes3d": 4, "mase": 4, "bidang": 4, "c1": 4, "r1": 4, "c2": 4, "r2": 4, "27": 4, "c3": 4, "r3": 4, "data": [4, 5], "y": [4, 5], "linspac": 4, "100": [4, 6], "grid": [4, 5], "meshgrid": 4, "nilai": [0, 1, 4], "z": 4, "z1": 4, "z2": 4, "z3": 4, "plot": [4, 5], "tiga": 4, "dimensi": 4, "fig": [4, 5], "figur": 4, "ax": [4, 5], "add_subplot": 4, "111": 4, "project": 4, "3d": 4, "plot_surfac": 4, "alpha": 4, "rstride": 4, "cstride": 4, "color": [4, 5], "r": [4, 5], "g": 4, "titik": [4, 5], "perpotongan": 4, "intersect": 4, "solv": 4, "scatter": [4, 5], "black": 4, "": [4, 5], "label": [4, 5], "sumbu": [4, 5], "set_xlabel": 4, "set_ylabel": 4, "set_zlabel": 4, "tampilkan": 4, "legenda": 4, "legend": [4, 5], "show": [4, 5], "nama": 7, "adib": 7, "wildan": 7, "riyadi": 7, "nim": 7, "230411100179": 7, "aljabar": [5, 7], "linier": [5, 7], "tuga": [], "selisih": 1, "antara": [0, 1], "perkalian": 1, "diagon": [1, 6], "sifat": [], "nya": 1, "mengubah": [1, 5], "tanda": 1, "lain": [0, 1, 5], "definisikan": 1, "matrixa": 1, "matrixb": 1, "matrixc": 1, "matrixd": 1, "matrix": [1, 5], "matrixf": 1, "matrixg": 1, "det1": 1, "round": 1, "det": 1, "det2": 1, "det3": 1, "det4": 1, "det5": 1, "det6": 1, "det7": 1, "f": [0, 1, 5, 6], "determinannya": 1, "24": 1, "dikali": 1, "matik": 1, "matrixh": 1, "salah": [0, 1], "seterusnya": 1, "berkelipatan": 1, "matrixi": 1, "matrixj": 1, "segitiga": 1, "ata": [0, 1], "bawah": [0, 1, 6], "matrix1": 1, "matrix2": 1, "matriks1": 1, "mencari": 1, "attributeerror": 3, "traceback": 3, "most": 3, "recent": 3, "call": 3, "last": 3, "cell": 3, "In": 3, "line": 3, "list": 3, "object": 3, "ha": 3, "attribut": 3, "inver": 7, "determin": 1, "ndeterminan": 1, "ninver": 1, "els": 1, "nmatrik": 1, "ini": [0, 1, 5], "karena": [0, 1], "999999999999997": 1, "16666667": [0, 1], "83333333": 1, "operasi": 5, "set": 5, "melalui": 5, "penggunaan": 5, "kontek": 5, "sere": 5, "digunakan": [0, 5], "melakukan": 5, "berbagai": 5, "geometri": 5, "ruang": 5, "euclidean": 5, "biasanya": 5, "dinotasikan": 5, "rumu": 5, "memperbesar": 5, "memperkecil": 5, "faktor": 5, "tertentu": 5, "s_x": 5, "s_y": 5, "mana": 5, "sepanjang": 5, "memutar": 5, "sebesar": 5, "sudut": 5, "terhadap": 5, "asal": 5, "theta": 5, "co": 5, "sin": 5, "mengges": 5, "bisa": [0, 5], "direpresentasikan": 5, "homogen": 5, "3x3": 5, "t": [0, 5], "t_x": 5, "t_y": 5, "jarak": 5, "mencerminkan": 5, "f_x": 5, "f_y": 5, "menggesernya": 5, "horizont": 5, "sh_x": 5, "k_x": 5, "vertik": 5, "sh_y": 5, "k_y": 5, "v": [0, 5], "90": 5, "derajat": 5, "radian": 5, "menerapkan": 5, "v_rotat": 5, "fungsi": 5, "menggambar": 5, "draw_axes_and_grid": 5, "lim": 5, "axhlin": 5, "grei": 5, "linewidth": 5, "axvlin": 5, "set_xlim": 5, "set_ylim": 5, "set_aspect": 5, "equal": 5, "adjust": 5, "box": 5, "which": 5, "both": 5, "linestyl": 5, "transform_and_plot": 5, "point": 5, "blue": 5, "transform": 5, "transformed_point": 5, "definisi": [5, 6], "himpunan": 5, "koordinat": 5, "theta_degre": 5, "45": 5, "rotation_matrix": 5, "subplot": 5, "red": 5, "ori": 5, "transfor": 5, "reflection_matrix": 5, "ulangi": 5, "gari": 5, "reflection_matrix_i": 5, "green": 5, "reflection_matrix_yx": 5, "purpl": 5, "shearing_matrix_x": 5, "shearing_matrix_i": 5, "origin": 5, "transformed_points_x": 5, "transformed_points_i": 5, "pagerank": [0, 7], "pr": [0, 6], "pencarian": 0, "oleh": 0, "googl": 0, "search": 0, "memberi": 0, "peringkat": 0, "halaman": 0, "web": 0, "mengukur": 0, "seberapa": 0, "pentingnya": 0, "bagi": 0, "pengguna": 0, "di": [0, 6], "mesin": 0, "mereka": 0, "menurut": 0, "bekerja": 0, "menghitung": 0, "kualita": 0, "tautan": 0, "menentukan": 0, "perkiraan": 0, "kasar": 0, "pent": 0, "situ": 0, "asumsi": 0, "mendasarinya": 0, "bahwa": 0, "cenderung": 0, "menerima": 0, "banyak": 0, "dasar": 0, "link": 0, "popular": 0, "memperhitungkan": 0, "inbound": 0, "outbound": 0, "pendekatan": 0, "diangap": 0, "semakin": 0, "rangk": 0, "tinggi": 0, "mengacu": 0, "terjadi": 0, "secara": 0, "rekursif": 0, "dimana": 0, "ditentukan": 0, "rangkingnya": 0, "berarti": 0, "berulang": 0, "dunia": 0, "maya": 0, "jutaan": 0, "bahkan": 0, "milyaran": 0, "itu": 0, "struktur": 0, "keseluruhan": 0, "sangat": 0, "besar": 0, "komplek": 0, "sudah": 0, "dijelaskan": 0, "artikel": 0, "lawrenc": 0, "sergei": 0, "brin": 0, "awal": 0, "d": [0, 6], "left": 0, "frac": 0, "t1": 0, "cdot": 0, "tn": 0, "right": 0, "dipublikasikan": 0, "keluar": 0, "damp": 0, "factor": 0, "diberi": 0, "terindek": 0, "dilihat": 0, "anda": 0, "bukan": 0, "kepadanya": 0, "menjalani": 0, "penentuan": 0, "cara": 0, "jadi": 0, "sampai": 0, "ditemukan": 0, "tepat": 0, "langsung": 0, "diberikan": 0, "kepada": 0, "dituju": 0, "dibagi": 0, "rata": 0, "demikian": 0, "semua": 0, "didapat": 0, "bernilai": 0, "hal": 0, "agar": 0, "didistribusikan": 0, "toleransi": 0, "1e": 0, "beda": 0, "inf": 0, "iter": 0, "while": 0, "v_baru": 0, "norm": 0, "375": 0, "08333333": 0, "20833333": 0, "4375": 0, "27083333": 0, "35416667": 0, "14583333": 0, "29166667": 0, "39583333": 0, "11805556": 0, "29513889": 0, "19097222": 0, "390625": 0, "13194444": 0, "28645833": 0, "38194444": 0, "13020833": 0, "19618056": 0, "38975694": 0, "12731481": 0, "29050926": 0, "19241898": 0, "38671875": 0, "12991898": 0, "28978588": 0, "19357639": 0, "38657407": 0, "12890625": 0, "29065394": 0, "19386574": 0, "38758681": 0, "12885802": 0, "29024402": 0, "19331115": 0, "38689959": 0, "1291956": 0, "29028019": 0, "19362461": 0, "12": 0, "3870925": 0, "12896653": 0, "29037664": 0, "19356433": 0, "38715881": 0, "12903083": 0, "29029626": 0, "1935141": 0, "14": 0, "38705331": 0, "12905294": 0, "2903254": 0, "19356835": 0, "38710958": 0, "12901777": 0, "29032841": 0, "19354424": 0, "38710053": 0, "12903653": 0, "29031753": 0, "19354541": 0, "17": 0, "38709024": 0, "12903351": 0, "29032448": 0, "19355177": 0, "38710037": 0, "12903008": 0, "29032272": 0, "19354683": 0, "38709614": 0, "12903346": 0, "29032191": 0, "19354849": 0, "38709616": 0, "12903205": 0, "29032302": 0, "19354877": 0, "21": 0, "38709741": 0, "29032246": 0, "19354808": 0, "3870965": 0, "12903247": 0, "29032253": 0, "1935485": 0, "23": 0, "38709678": 0, "12903217": 0, "29032265": 0, "1935484": 0, "aplikasi": 7, "kal": 7, "adjac": [], "graf": [], "node": 6, "dihitung": [], "85": 6, "diinisialisasi": [], "ones": 6, "toler": [], "pr_new_it": [], "ord": [], "break": [], "pr_matrix": [], "reshap": [], "augment": 6, "dtype": 6, "float": 6, "back": 6, "substitut": 6, "zero": 6, "sum": 6, "solusi": 6, "hitunglah": 7, "graph": 7, "carilah": 7, "penyelesaian": 7, "persamaan": 7, "gauss": 7, "transisi": 6, "inisialisasi": 6, "normalisasi": 6, "urutan": 6, "ranked_nod": 6, "argsort": 6, "enumer": 6, "start": 6, "31106582033842384": 6, "29128723239886317": 6, "15160698856194355": 6, "12790464293821613": 6, "1181353157625534": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"tuga": [], "3": [3, 5], "matrik": [1, 2, 3, 5], "inver": [1, 2], "sifat": [1, 2], "mencari": 2, "dengan": [2, 6], "eleminasi": [2, 4], "gauss": [2, 4, 6], "jordan": 2, "solusi": 2, "persamaan": [2, 4, 6], "linier": [2, 4], "aljabar": 3, "1": [3, 5, 6], "2": [3, 5, 6], "jeni": [3, 5], "operasi": [3, 4], "penjumlahan": 3, "pengurangan": 3, "perkalian": 3, "dan": [1, 3, 5], "transpos": 3, "tranpos": 3, "berikut": [3, 6], "adalah": 3, "salah": 3, "satu": 3, "program": 3, "untuk": 3, "mengalikan": 3, "sistem": [4, 6], "penyelesaian": [4, 6], "mendefinisikan": 4, "fungsi": 4, "bari": 4, "welcom": 7, "my": 7, "jupyt": 7, "book": 7, "determinan": 1, "menghitung": 1, "5x5": 1, "tranformasi": 5, "transformasi": 5, "rumusnya": 5, "identita": 5, "skala": 5, "scale": 5, "rotasi": 5, "rotat": 5, "4": 5, "translasi": 5, "translat": 5, "5": 5, "refleksi": 5, "reflect": 5, "6": 5, "geser": 5, "shear": 5, "contoh": 5, "implementasi": 5, "di": 5, "python": 5, "numpi": 5, "aplikasi": 0, "kal": 0, "page": 0, "rank": 0, "konsep": 0, "algoritma": 0, "implentasi": 0, "hitunglah": 6, "pagerank": 6, "dari": 6, "graph": 6, "carilah": 6, "eliminasi": 6}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Matriks Invers": [[2, "matriks-invers"]], "Sifat-sifat Matriks Invers": [[2, "sifat-sifat-matriks-invers"]], "Mencari Invers Dengan Eleminasi Gauss Jordan": [[2, "mencari-invers-dengan-eleminasi-gauss-jordan"]], "Solusi Persamaan Linier Dengan Matriks Invers": [[2, "solusi-persamaan-linier-dengan-matriks-invers"]], "Aljabar Matriks": [[3, "aljabar-matriks"]], "1.Matriks": [[3, "matriks"]], "2.Jenis-jenis Matriks": [[3, "jenis-jenis-matriks"]], "3.Operasi Matriks (Penjumlahan, Pengurangan, Perkalian, dan Transpose)": [[3, "operasi-matriks-penjumlahan-pengurangan-perkalian-dan-transpose"]], "1. Penjumlahan dan Pengurangan:": [[3, "penjumlahan-dan-pengurangan"]], "2. Perkalian Matriks": [[3, "perkalian-matriks"]], "3.Tranpose": [[3, "tranpose"]], "Berikut adalah salah satu Program untuk mengalikan Matriks :": [[3, "berikut-adalah-salah-satu-program-untuk-mengalikan-matriks"]], "Aplikasi KAL": [[0, "aplikasi-kal"]], "Page Rank": [[0, "page-rank"]], "Konsep": [[0, "konsep"]], "Algoritma": [[0, "algoritma"]], "Implentasi": [[0, "implentasi"]], "Determinan Matriks": [[1, "determinan-matriks"]], "Sifat Matriks": [[1, "sifat-matriks"]], "Menghitung determinan matriks dan invers matrik matriks 5x5": [[1, "menghitung-determinan-matriks-dan-invers-matrik-matriks-5x5"]], "Sistem Linier": [[4, "sistem-linier"]], "Penyelesaian persamaan Linier": [[4, "penyelesaian-persamaan-linier"]], "Mendefinisikan fungsi operasi baris eleminasi Gauss": [[4, "mendefinisikan-fungsi-operasi-baris-eleminasi-gauss"]], "Tranformasi Matriks": [[5, "tranformasi-matriks"]], "Jenis-Jenis Transformasi Matriks dan Rumusnya": [[5, "jenis-jenis-transformasi-matriks-dan-rumusnya"]], "1. Transformasi Identitas": [[5, "transformasi-identitas"]], "2. Transformasi Skala (Scaling)": [[5, "transformasi-skala-scaling"]], "3. Transformasi Rotasi (Rotation)": [[5, "transformasi-rotasi-rotation"]], "4. Transformasi Translasi (Translation)": [[5, "transformasi-translasi-translation"]], "5. Transformasi Refleksi (Reflection)": [[5, "transformasi-refleksi-reflection"]], "6. Transformasi Geser (Shear)": [[5, "transformasi-geser-shear"]], "Contoh Implementasi di Python (NumPy)": [[5, "contoh-implementasi-di-python-numpy"]], "1. Hitunglah PageRank dari graph berikut": [[6, "hitunglah-pagerank-dari-graph-berikut"]], "2. Carilah penyelesaian dari sistem persamaan berikut dengan Eliminasi Gauss": [[6, "carilah-penyelesaian-dari-sistem-persamaan-berikut-dengan-eliminasi-gauss"]], "Welcome to My Jupyter Book": [[7, "welcome-to-my-jupyter-book"]]}, "indexentries": {}})