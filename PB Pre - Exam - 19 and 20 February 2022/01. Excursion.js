function excursion(input) {
    const numbPeople = Number(input[0]);
    const numbNoshtuvki = Number(input[1]);
    const numbCartTransport = Number(input[2]);
    const numbTiketsMuseum = Number(input[3]);

    const priceNoshtuvka = 20;
    const priceCartTransport = 1.60;
    const priceTiketMuseum = 6;

    const priceTotalNoshtuvka = numbNoshtuvki * priceNoshtuvka;
    const priceTotalTransport = numbCartTransport * priceCartTransport;
    const priceTotalMuseum = numbTiketsMuseum * priceTiketMuseum;

    const totalForOne = priceTotalNoshtuvka + priceTotalTransport + priceTotalMuseum;
    const totalForAll = numbPeople * totalForOne;
    const total = totalForAll * 1.25;
    console.log(total.toFixed(2));
}

excursion(["131",
"9",
"33",
"46"])
