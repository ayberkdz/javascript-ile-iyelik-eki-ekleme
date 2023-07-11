class PossesiveSuffix {
    constructor() {
        this.conjunction = `'`;
    }

    word(vocable) {

        // Gelen ismin son harfi
        this.lastLetter = vocable.charAt(vocable.length - 1)

        // sesli harfler
        this.vowels = 'aeıioöuü'

        // iyelik ekleri
        this.possesiveSuffixes = ['nın', 'nin', 'nun', 'nün']

        // son harf sesli harf içermiyorsa sondan ikinci harfin sesli harfine göre;
        if ( !this.vowels.includes(this.lastLetter) ) {

            for (const letter of [... vocable].reverse()) {
                if (this.vowels.includes(letter)) {
                    this.lastLetter = letter
                    break;
                }
            }

            this.possesiveSuffixes = ['ın', 'in', 'un', 'ün']
        }

        this.possesiveSuffix = this.possesiveSuffixes[0]

        switch (this.lastLetter.toLocaleLowerCase()) {
            case 'a': case 'ı':
                this.possesiveSuffix = this.possesiveSuffixes[0]
                break;

            case 'e': case 'i':
                this.possesiveSuffix = this.possesiveSuffixes[1]
                break;
            
            case 'o': case 'u':
                    this.possesiveSuffix = this.possesiveSuffixes[2]
                    break;

            case 'ö': case 'ü':
                    this.possesiveSuffix = this.possesiveSuffixes[3]
                    break;
        }

        this.vocable = `${vocable}${this.conjunction}${this.possesiveSuffix}`

        return this
    }

    toLowerCase() {
        this.vocable = this.vocable.toLocaleLowerCase()
        return this
    }

    toUpperCase() {
        this.vocable = this.vocable.toLocaleUpperCase()
        return this
    }

    toCapitalize() {
        this.vocable = this.vocable.charAt(0).toLocaleUpperCase() + this.vocable.slice(1)
        return this
    }

    with(word) {
        this.vocable += ` ${word} `
        return this
    }

    get() {
        return this.vocable
    }
}

const possesive = new PossesiveSuffix()

const names = ['Ahmet', 'Mahmut', 'Erkan', 'Fatih', 'Koray', 'Ömer'];

// console.log(
//     names.map(name => possesive.word(name).with('motoru').get())
// );

const ulElement = document.createElement('ul');
ulElement.setAttribute('style', 'list-style-type: none;')
document.body.appendChild(ulElement)

for (const name of names) {
    const liElement = document.createElement('li');
    liElement.setAttribute('index', names.indexOf(name))
    liElement.setAttribute('style', 'font-weight: bold; font-size: 22px; padding: 10px;')
    liElement.textContent = possesive.word(name).with('arabası').get()

    ulElement.appendChild(liElement)
}
