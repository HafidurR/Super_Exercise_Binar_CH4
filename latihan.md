# `Sequelize - Exercise`

## `Directions`
- Diberikan masterdata `country.json`, `province.json` dan `city.json`, buatlah migrasi table dan seeder untuk data tersebut.
***
- Buatlah tiga table, yaitu `clients`, `brands` dan `addresses`.
***
- Terkait table `client`:
    - Memiliki attributes: `name` berupa string, `ktp_number` berupa string, `npwp_number` berupa string, dan attribut lain yang MUNGKIN berkaitan dengan relasi.
    - Buatlah sehingga setiap `client` memiliki satu `address`.
    - Buatlah sehingga setiap `client` memiliki banyak `brand`.
***
- Terkait table `brand`:
    - Memiliki attributes: `name` berupa string, `is_big_brand` berupa boolean, dan attribut lain yang MUNGKIN berkaitan dengan relasi.
***
- Terkait table `address`:
    - Memiliki attributes: `address_description` berupa string, `postal_code` berupa string, dan attribut lain yang MUNGKIN berkaitan dengan relasi.
***
- Terkait table `countries`, `provinces`, dan `cities`:
    - Setiap `country` dapat memiliki banyak `province` dan `address`.
    - Setiap `province` dapat memiliki banyak `city` dan `address`.
    - Setiap `city` dapat memiliki banyak `address`.
***
- Buatlah CRUD untuk table `clients`, `brands` dan `addresses`.
***
## `Restrictions`
- Wajib menggunakan Sequelize.