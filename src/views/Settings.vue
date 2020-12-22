<template>
<div id="content" class="main-content">



     <!--  User Modal Popup -->
    <user-account :country="getDetail.country"></user-account>
     <!--  End User Modal Popup -->
    <b-modal v-model="transfer_update_modal" title="TransferWise" modal-footer centered hide-footer="true" >
        <label class="text-dark" >TransferWise Contact Information</label>
        <hr>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter your transferWise Email"c v-model="transferwiseAccount.email">
        </div>

        <div class="form-group">
            <select id="currency" class="form-control" v-model="transferwiseAccount.currency">
                <option value="null">Select Currency</option>
                <option value="AFA">Afghan Afghani</option>
                <option value="ALL">Albanian Lek</option>
                <option value="DZD">Algerian Dinar</option>
                <option value="AOA">Angolan Kwanza</option>
                <option value="ARS">Argentine Peso</option>
                <option value="AMD">Armenian Dram</option>
                <option value="AWG">Aruban Florin</option>
                <option value="AUD">Australian Dollar</option>
                <option value="AZN">Azerbaijani Manat</option>
                <option value="BSD">Bahamian Dollar</option>
                <option value="BHD">Bahraini Dinar</option>
                <option value="BDT">Bangladeshi Taka</option>
                <option value="BBD">Barbadian Dollar</option>
                <option value="BYR">Belarusian Ruble</option>
                <option value="BEF">Belgian Franc</option>
                <option value="BZD">Belize Dollar</option>
                <option value="BMD">Bermudan Dollar</option>
                <option value="BTN">Bhutanese Ngultrum</option>
                <option value="BTC">Bitcoin</option>
                <option value="BOB">Bolivian Boliviano</option>
                <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
                <option value="BWP">Botswanan Pula</option>
                <option value="BRL">Brazilian Real</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="BND">Brunei Dollar</option>
                <option value="BGN">Bulgarian Lev</option>
                <option value="BIF">Burundian Franc</option>
                <option value="KHR">Cambodian Riel</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="CVE">Cape Verdean Escudo</option>
                <option value="KYD">Cayman Islands Dollar</option>
                <option value="XOF">CFA Franc BCEAO</option>
                <option value="XAF">CFA Franc BEAC</option>
                <option value="XPF">CFP Franc</option>
                <option value="CLP">Chilean Peso</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="COP">Colombian Peso</option>
                <option value="KMF">Comorian Franc</option>
                <option value="CDF">Congolese Franc</option>
                <option value="CRC">Costa Rican ColÃ³n</option>
                <option value="HRK">Croatian Kuna</option>
                <option value="CUC">Cuban Convertible Peso</option>
                <option value="CZK">Czech Republic Koruna</option>
                <option value="DKK">Danish Krone</option>
                <option value="DJF">Djiboutian Franc</option>
                <option value="DOP">Dominican Peso</option>
                <option value="XCD">East Caribbean Dollar</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="ERN">Eritrean Nakfa</option>
                <option value="EEK">Estonian Kroon</option>
                <option value="ETB">Ethiopian Birr</option>
                <option value="EUR">Euro</option>
                <option value="FKP">Falkland Islands Pound</option>
                <option value="FJD">Fijian Dollar</option>
                <option value="GMD">Gambian Dalasi</option>
                <option value="GEL">Georgian Lari</option>
                <option value="DEM">German Mark</option>
                <option value="GHS">Ghanaian Cedi</option>
                <option value="GIP">Gibraltar Pound</option>
                <option value="GRD">Greek Drachma</option>
                <option value="GTQ">Guatemalan Quetzal</option>
                <option value="GNF">Guinean Franc</option>
                <option value="GYD">Guyanaese Dollar</option>
                <option value="HTG">Haitian Gourde</option>
                <option value="HNL">Honduran Lempira</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="HUF">Hungarian Forint</option>
                <option value="ISK">Icelandic KrÃ³na</option>
                <option value="INR">Indian Rupee</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="IRR">Iranian Rial</option>
                <option value="IQD">Iraqi Dinar</option>
                <option value="ILS">Israeli New Sheqel</option>
                <option value="ITL">Italian Lira</option>
                <option value="JMD">Jamaican Dollar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="JOD">Jordanian Dinar</option>
                <option value="KZT">Kazakhstani Tenge</option>
                <option value="KES">Kenyan Shilling</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="KGS">Kyrgystani Som</option>
                <option value="LAK">Laotian Kip</option>
                <option value="LVL">Latvian Lats</option>
                <option value="LBP">Lebanese Pound</option>
                <option value="LSL">Lesotho Loti</option>
                <option value="LRD">Liberian Dollar</option>
                <option value="LYD">Libyan Dinar</option>
                <option value="LTL">Lithuanian Litas</option>
                <option value="MOP">Macanese Pataca</option>
                <option value="MKD">Macedonian Denar</option>
                <option value="MGA">Malagasy Ariary</option>
                <option value="MWK">Malawian Kwacha</option>
                <option value="MYR">Malaysian Ringgit</option>
                <option value="MVR">Maldivian Rufiyaa</option>
                <option value="MRO">Mauritanian Ouguiya</option>
                <option value="MUR">Mauritian Rupee</option>
                <option value="MXN">Mexican Peso</option>
                <option value="MDL">Moldovan Leu</option>
                <option value="MNT">Mongolian Tugrik</option>
                <option value="MAD">Moroccan Dirham</option>
                <option value="MZM">Mozambican Metical</option>
                <option value="MMK">Myanmar Kyat</option>
                <option value="NAD">Namibian Dollar</option>
                <option value="NPR">Nepalese Rupee</option>
                <option value="ANG">Netherlands Antillean Guilder</option>
                <option value="TWD">New Taiwan Dollar</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="NIO">Nicaraguan CÃ³rdoba</option>
                <option value="NGN">Nigerian Naira</option>
                <option value="KPW">North Korean Won</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="OMR">Omani Rial</option>
                <option value="PKR">Pakistani Rupee</option>
                <option value="PAB">Panamanian Balboa</option>
                <option value="PGK">Papua New Guinean Kina</option>
                <option value="PYG">Paraguayan Guarani</option>
                <option value="PEN">Peruvian Nuevo Sol</option>
                <option value="PHP">Philippine Peso</option>
                <option value="PLN">Polish Zloty</option>
                <option value="QAR">Qatari Rial</option>
                <option value="RON">Romanian Leu</option>
                <option value="RUB">Russian Ruble</option>
                <option value="RWF">Rwandan Franc</option>
                <option value="SVC">Salvadoran ColÃ³n</option>
                <option value="WST">Samoan Tala</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="RSD">Serbian Dinar</option>
                <option value="SCR">Seychellois Rupee</option>
                <option value="SLL">Sierra Leonean Leone</option>
                <option value="SGD">Singapore Dollar</option>
                <option value="SKK">Slovak Koruna</option>
                <option value="SBD">Solomon Islands Dollar</option>
                <option value="SOS">Somali Shilling</option>
                <option value="ZAR">South African Rand</option>
                <option value="KRW">South Korean Won</option>
                <option value="XDR">Special Drawing Rights</option>
                <option value="LKR">Sri Lankan Rupee</option>
                <option value="SHP">St. Helena Pound</option>
                <option value="SDG">Sudanese Pound</option>
                <option value="SRD">Surinamese Dollar</option>
                <option value="SZL">Swazi Lilangeni</option>
                <option value="SEK">Swedish Krona</option>
                <option value="CHF">Swiss Franc</option>
                <option value="SYP">Syrian Pound</option>
                <option value="STD">São Tomé and Príncipe Dobra</option>
                <option value="TJS">Tajikistani Somoni</option>
                <option value="TZS">Tanzanian Shilling</option>
                <option value="THB">Thai Baht</option>
                <option value="TOP">Tongan pa'anga</option>
                <option value="TTD">Trinidad & Tobago Dollar</option>
                <option value="TND">Tunisian Dinar</option>
                <option value="TRY">Turkish Lira</option>
                <option value="TMT">Turkmenistani Manat</option>
                <option value="UGX">Ugandan Shilling</option>
                <option value="UAH">Ukrainian Hryvnia</option>
                <option value="UYU">Uruguayan Peso</option>
                <option value="USD">US Dollar</option>
                <option value="UZS">Uzbekistan Som</option>
                <option value="VUV">Vanuatu Vatu</option>
                <option value="VEF">Venezuelan BolÃ­var</option>
                <option value="VND">Vietnamese Dong</option>
                <option value="YER">Yemeni Rial</option>
                <option value="ZMK">Zambian Kwacha</option>
            </select>
        </div>

        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter your transferWise Phone Number ( optional )"c v-model="transferwiseAccount.phone">
        </div>

        <hr>
        <button class="btn btn-primary" @click="updateTransferWiseAccount()">Submit</button>
    </b-modal>
    <b-modal v-model="transfer_modal" title="TransferWise" modal-footer centered hide-footer="true" >
        <label class="text-dark" >TransferWise Contact Information</label>
        <hr>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter your transferWise Email"c v-model="form.email">
        </div>

        <div class="form-group">
            <select id="currency" class="form-control" v-model="form.currency">
                <option value="null">Select Currency</option>
                <option value="AFA">Afghan Afghani</option>
                <option value="ALL">Albanian Lek</option>
                <option value="DZD">Algerian Dinar</option>
                <option value="AOA">Angolan Kwanza</option>
                <option value="ARS">Argentine Peso</option>
                <option value="AMD">Armenian Dram</option>
                <option value="AWG">Aruban Florin</option>
                <option value="AUD">Australian Dollar</option>
                <option value="AZN">Azerbaijani Manat</option>
                <option value="BSD">Bahamian Dollar</option>
                <option value="BHD">Bahraini Dinar</option>
                <option value="BDT">Bangladeshi Taka</option>
                <option value="BBD">Barbadian Dollar</option>
                <option value="BYR">Belarusian Ruble</option>
                <option value="BEF">Belgian Franc</option>
                <option value="BZD">Belize Dollar</option>
                <option value="BMD">Bermudan Dollar</option>
                <option value="BTN">Bhutanese Ngultrum</option>
                <option value="BTC">Bitcoin</option>
                <option value="BOB">Bolivian Boliviano</option>
                <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
                <option value="BWP">Botswanan Pula</option>
                <option value="BRL">Brazilian Real</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="BND">Brunei Dollar</option>
                <option value="BGN">Bulgarian Lev</option>
                <option value="BIF">Burundian Franc</option>
                <option value="KHR">Cambodian Riel</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="CVE">Cape Verdean Escudo</option>
                <option value="KYD">Cayman Islands Dollar</option>
                <option value="XOF">CFA Franc BCEAO</option>
                <option value="XAF">CFA Franc BEAC</option>
                <option value="XPF">CFP Franc</option>
                <option value="CLP">Chilean Peso</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="COP">Colombian Peso</option>
                <option value="KMF">Comorian Franc</option>
                <option value="CDF">Congolese Franc</option>
                <option value="CRC">Costa Rican ColÃ³n</option>
                <option value="HRK">Croatian Kuna</option>
                <option value="CUC">Cuban Convertible Peso</option>
                <option value="CZK">Czech Republic Koruna</option>
                <option value="DKK">Danish Krone</option>
                <option value="DJF">Djiboutian Franc</option>
                <option value="DOP">Dominican Peso</option>
                <option value="XCD">East Caribbean Dollar</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="ERN">Eritrean Nakfa</option>
                <option value="EEK">Estonian Kroon</option>
                <option value="ETB">Ethiopian Birr</option>
                <option value="EUR">Euro</option>
                <option value="FKP">Falkland Islands Pound</option>
                <option value="FJD">Fijian Dollar</option>
                <option value="GMD">Gambian Dalasi</option>
                <option value="GEL">Georgian Lari</option>
                <option value="DEM">German Mark</option>
                <option value="GHS">Ghanaian Cedi</option>
                <option value="GIP">Gibraltar Pound</option>
                <option value="GRD">Greek Drachma</option>
                <option value="GTQ">Guatemalan Quetzal</option>
                <option value="GNF">Guinean Franc</option>
                <option value="GYD">Guyanaese Dollar</option>
                <option value="HTG">Haitian Gourde</option>
                <option value="HNL">Honduran Lempira</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="HUF">Hungarian Forint</option>
                <option value="ISK">Icelandic KrÃ³na</option>
                <option value="INR">Indian Rupee</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="IRR">Iranian Rial</option>
                <option value="IQD">Iraqi Dinar</option>
                <option value="ILS">Israeli New Sheqel</option>
                <option value="ITL">Italian Lira</option>
                <option value="JMD">Jamaican Dollar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="JOD">Jordanian Dinar</option>
                <option value="KZT">Kazakhstani Tenge</option>
                <option value="KES">Kenyan Shilling</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="KGS">Kyrgystani Som</option>
                <option value="LAK">Laotian Kip</option>
                <option value="LVL">Latvian Lats</option>
                <option value="LBP">Lebanese Pound</option>
                <option value="LSL">Lesotho Loti</option>
                <option value="LRD">Liberian Dollar</option>
                <option value="LYD">Libyan Dinar</option>
                <option value="LTL">Lithuanian Litas</option>
                <option value="MOP">Macanese Pataca</option>
                <option value="MKD">Macedonian Denar</option>
                <option value="MGA">Malagasy Ariary</option>
                <option value="MWK">Malawian Kwacha</option>
                <option value="MYR">Malaysian Ringgit</option>
                <option value="MVR">Maldivian Rufiyaa</option>
                <option value="MRO">Mauritanian Ouguiya</option>
                <option value="MUR">Mauritian Rupee</option>
                <option value="MXN">Mexican Peso</option>
                <option value="MDL">Moldovan Leu</option>
                <option value="MNT">Mongolian Tugrik</option>
                <option value="MAD">Moroccan Dirham</option>
                <option value="MZM">Mozambican Metical</option>
                <option value="MMK">Myanmar Kyat</option>
                <option value="NAD">Namibian Dollar</option>
                <option value="NPR">Nepalese Rupee</option>
                <option value="ANG">Netherlands Antillean Guilder</option>
                <option value="TWD">New Taiwan Dollar</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="NIO">Nicaraguan CÃ³rdoba</option>
                <option value="NGN">Nigerian Naira</option>
                <option value="KPW">North Korean Won</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="OMR">Omani Rial</option>
                <option value="PKR">Pakistani Rupee</option>
                <option value="PAB">Panamanian Balboa</option>
                <option value="PGK">Papua New Guinean Kina</option>
                <option value="PYG">Paraguayan Guarani</option>
                <option value="PEN">Peruvian Nuevo Sol</option>
                <option value="PHP">Philippine Peso</option>
                <option value="PLN">Polish Zloty</option>
                <option value="QAR">Qatari Rial</option>
                <option value="RON">Romanian Leu</option>
                <option value="RUB">Russian Ruble</option>
                <option value="RWF">Rwandan Franc</option>
                <option value="SVC">Salvadoran ColÃ³n</option>
                <option value="WST">Samoan Tala</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="RSD">Serbian Dinar</option>
                <option value="SCR">Seychellois Rupee</option>
                <option value="SLL">Sierra Leonean Leone</option>
                <option value="SGD">Singapore Dollar</option>
                <option value="SKK">Slovak Koruna</option>
                <option value="SBD">Solomon Islands Dollar</option>
                <option value="SOS">Somali Shilling</option>
                <option value="ZAR">South African Rand</option>
                <option value="KRW">South Korean Won</option>
                <option value="XDR">Special Drawing Rights</option>
                <option value="LKR">Sri Lankan Rupee</option>
                <option value="SHP">St. Helena Pound</option>
                <option value="SDG">Sudanese Pound</option>
                <option value="SRD">Surinamese Dollar</option>
                <option value="SZL">Swazi Lilangeni</option>
                <option value="SEK">Swedish Krona</option>
                <option value="CHF">Swiss Franc</option>
                <option value="SYP">Syrian Pound</option>
                <option value="STD">São Tomé and Príncipe Dobra</option>
                <option value="TJS">Tajikistani Somoni</option>
                <option value="TZS">Tanzanian Shilling</option>
                <option value="THB">Thai Baht</option>
                <option value="TOP">Tongan pa'anga</option>
                <option value="TTD">Trinidad & Tobago Dollar</option>
                <option value="TND">Tunisian Dinar</option>
                <option value="TRY">Turkish Lira</option>
                <option value="TMT">Turkmenistani Manat</option>
                <option value="UGX">Ugandan Shilling</option>
                <option value="UAH">Ukrainian Hryvnia</option>
                <option value="UYU">Uruguayan Peso</option>
                <option value="USD">US Dollar</option>
                <option value="UZS">Uzbekistan Som</option>
                <option value="VUV">Vanuatu Vatu</option>
                <option value="VEF">Venezuelan BolÃ­var</option>
                <option value="VND">Vietnamese Dong</option>
                <option value="YER">Yemeni Rial</option>
                <option value="ZMK">Zambian Kwacha</option>
            </select>
        </div>

        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter your transferWise Phone Number ( optional )"c v-model="form.phone">
        </div>

        <hr>
        <button class="btn btn-primary" @click="addTransferWiseAccount()">Submit</button>
    </b-modal>


    <!-- Main Content -->
    <div class="layout-px-spacing">

        <div class="row">
            <div class="col-md-12">
                <!-- Page Header -->
                <div class="breadcrumb-five mt-2">
                    <ul class="breadcrumb">
                        <li class="mb-2"><a href="javscript:void(0);">Home</a></li>
                        <li class="active mb-2"><a href="javscript:void(0);"> Settings</a></li>
                    </ul>
                </div>
                <!-- End Page Header -->
                <div v-if="getUserStripeAccount.transfer  != 'active'" class="alert alert-light-danger mb-4" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><svg> ... </svg></button>
                    <strong>Alert!</strong> Complete your transfer account in order to enable automatic payouts.</button>
                </div>
            </div>
        </div>
        <div class="row">
              <div class="col-lg-12">
                <div class="widget-content searchable-container list">
                    <div class="row layout-top-spacing layout-spacing">
                        <div class="col-lg-12">
                            <div class="card">

                                <div class="card-body">
<!--                                    <div class="" v-if="getUserStripeAccount">-->
<!--                                        <h5 class="">{{getUserStripeAccount.name}}</h5>-->
<!--                                        <p>Country: {{getUserStripeAccount.country}}</p>-->
<!--                                        <p>Payout Status:-->
<!--                                            <span class="badge badge-danger text-3" v-if="getUserStripeAccount.transfer  == 'inactive'">{{getUserStripeAccount.transfer}}</span>-->
<!--                                            <span class="badge badge-success text-3" v-else>{{getUserStripeAccount.transfer}}</span>-->

<!--                                        </p>-->
<!--                                        <button class="btn btn-danger btn-sm" @click="accountUpdate()">-->
<!--                                            Update-->
<!--                                        </button>-->
<!--                                    </div>-->
                                </div>
                            </div>
                            <div class="statbox widget box box-shadow">

                                <div class="widget-header">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Payout Methods</h4>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content widget-content-area">
                                    <div class="list-group list-group-icons-meta" >
                                        <li class="list-group-item list-group-item-action">
                                            <div class="" v-if="getUserStripeAccount">
                                                <div class="user-profile">
                                                    <div class="widget-content widget-content-area">
                                                        <div>
                                                            <img src="@/assets/avatar/img12.jpg" alt="avatar">
                                                            <h5 class="">{{getUserStripeAccount.name}}</h5>
                                                            <p>Country: {{getUserStripeAccount.country}}</p>
                                                            <p>Payout Status:
                                                                <span class="badge badge-danger text-3" v-if="getUserStripeAccount.transfer  == 'inactive'">{{getUserStripeAccount.transfer}}</span>
                                                                <span class="badge badge-success text-3" v-else>{{getUserStripeAccount.transfer}}</span>

                                                            </p>
                                                            <button class="btn btn-danger btn-sm" @click="accountUpdate()">
                                                                Update
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <li class="list-group-item list-group-item-action text-center" v-if="getStripeAccount">
                                            <div class="mt-5">
                                                <h5 class="pb-4">Verify your identity with stripe will enable automatic payout for supported debit card and bank account</h5>
                                                <button class="btn btn-primary mb-5" @click="accountOnboarding()"><i class="fa fa-user-alt-slash"></i> Verify Identity </button>
                                            </div>
                                        </li>

                                        <li class="list-group-item list-group-item-action text-center">
                                            <div class="mt-5">
                                                <h5 class="">Add bank account or debit card</h5>
                                                <h6 class="text-danger pb-2">Bank Transfer takes 1-3 business days while Debit Card Transfer takes up 30 mins </h6>

                                                <button class="btn btn-primary mb-5" @click="modalBankAccount()"><i class="fa fa-plus"></i> Add Bank Account </button>
                                                <button class="btn btn-primary mb-5 ml-1" @click="modalDebitCard()"><i class="fa fa-plus"></i> Add Debit Card <span class="badge badge-success">Recommended</span></button>
                                                <div class="row">
                                                    <div class="col-md-3"></div>
                                                    <div class="col-md-2">
                                                        <img width="50px" src="@/assets/svg/004-mastercard.svg" alt="">
                                                    </div>

                                                    <div class="col-md-2">
                                                        <img width="50px" src="@/assets/svg/007-discover.svg" alt="">
                                                    </div>

                                                    <div class="col-md-2">
                                                        <img width="50px" src="@/assets/svg/005-visa.svg" alt="">
                                                    </div>
                                                    <div class="col-md-3Z"></div>
                                                </div>
                                             </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body" v-if="getStripeAccount">
                        <div id='right-defaults' class='dragula' v-for="acc in getStripeAccount">
                            <div class="media  d-md-flex d-block text-sm-left text-center">
                                <img src="@/assets/svg/005-credit-card.svg"  class="mt-2" alt="" width="40px">
                                <div class="media-body">
                                    <div class="d-xl-flex justify-content-between">
                                        <div class="ml-3" v-if="acc.object == 'bank_account'">
                                            <h6>{{acc.bank_name}}</h6>
                                            <p class="mt-0">{{acc.account_holder_name}} **** {{acc.last4}} </p>
                                        </div>

                                        <div class="ml-3" v-if="acc.object == 'card'">
                                            <h6>{{acc.bank_name}}</h6>
                                            <p class="mt-0">{{acc.brand}} {{acc.funding}} **** {{acc.last4}} </p>
                                        </div>

                                        <div>
                                            <router-link to="/dashboard/wallet" tag="a" class="btn btn-success btn-sm" v-if="getUserStripeAccount['transfer']" >Transfer Active</router-link>
                                            <button class="btn btn-danger btn-sm ml-2" @click="deleteAccount(acc.id, acc.object, acc.account)">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body" v-if="transferwiseAccount" >
                        <div id='right-defaults' class='dragula'>
                            <div class="media  d-md-flex d-block text-sm-left text-center">
                                <img src="@/assets/transferwise.png"class="img-fluid"  width="90px" >
                                <div class="media-body">
                                    <div class="d-xl-flex d-block justify-content-between">
                                        <div class="ml-3">
                                            <h6 class="">TransferWise Account</h6>
                                            <p class="">{{transferwiseAccount.email}} | <i>currency: <b>{{transferwiseAccount.currency}}</b></i></p>
                                        </div>
                                        <div>
                                            <button class="btn btn-primary btn-sm">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body" style="background: #f2f5f7;" v-else>
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <a href="https://transferwise.com/invite/u/robertd2231">Click to Create A TransferWise Account</a>
                                <small>Then add account email and currency here</small>
                            </div>
                        </div>
                        <div class="row text-center">
                            <div class="col-md-12">
                                <img src="@/assets/transferwise.png" width="10%">
                            </div>
                        </div>
                        <div class="row text-center mt-3">
                            <div class="col-md-12">
                                <button class="btn btn-primary btn-rounded" @click="showTransferWiseModal()">Add Account</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- End Main Content -->
</div>
</template>

<script>

    import { mapGetters } from 'vuex';
    import Loading from 'vue-loading-overlay';
    import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
    import { required } from "vee-validate/dist/rules";
    import UserAccount from '../components/UserAccount';

    extend('required', {
        ...required,
        message: 'This field is required'
    });


    export default {

        name: "Settings.vue",

        components: {
            Loading,
            ValidationProvider,
            ValidationObserver,
            UserAccount
        },

        data() {
            return {
                isLoading: false,
                transfer_modal: false,
                transfer_update_modal: false,
                form: {
                    email: null,
                    phone: null,
                    currency: null
                },
                step: 1,

                type: {
                    bank: null,
                    paypal: null
                },

                paypal: {
                    email: null
                },

                bankIsActive: false,
                paypalIsActive: false,
                debitIsActive: false,
                mccIsActive: false,
                isLoading: false,
                fullPage: true,
                onCancel: false,

                bank: {
                    country: null,
                    currency: null,
                    account_holder_name: null,
                    account_holder_type: null,
                    routing_number: null,
                    account_number: null,
                    sort_code: null
                },

                debit: {
                    name: null,
                    currency: null,
                    cvc: null,
                    exp_year: null,
                    exp_month: null,
                    number: null,
                    object: 'card'
                },

                type: null,

                alerts: {
                    debit: {
                        isAlert: false,
                        message: null
                    }
                },
                countries: ['US', 'GB', 'CA'],
                countries2: [ 'AU','AT', 'BE', 'BG', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
                    'HK', 'IE', 'IT', 'JP', 'LV', 'LT', 'LU', 'MT', 'MX', 'NL', 'NZ', 'NO', 'PL',
                    'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'CH', 'GB']

            }
        },



        created() {
           this.init()
        },

        computed: {

            ...mapGetters([
                'transferwiseAccount',
                'CustomerDetails',
                'getStripeAccount',
                'GetPaypalAccount',
                'getUserStripeAccount',
                'getLoginUser',
                'getDetail'
            ]),
        },

        methods: {

            init() {
                this.$store.dispatch('FETCH_DETAIL')
                this.$store.dispatch('FETCH_CUSTOMER_DETAILS')
                this.$store.dispatch('STRIPE_ACCOUNT')
                this.$store.dispatch('FETCH_USER_PAYPAL_ACCOUNT')
                this.$store.dispatch('FETCH_STRIPE_ACCOUNT')
                this.$store.dispatch('TRANSFERWISE_FETCH_ACCOUNT')
            },

            addAccount(){

                this.isLoading = true
                this.$store.dispatch('ADD_USER_ACCOUNT')
                    .then( response => {

                        this.isLoading = false
                        console.log(response)
                        let url = response.account.url
                        window.location.href = url
                        $('#accountModal').modal('hide')
                        this.init()
                    })
                    .catch( error => {

                        this.isLoading = false
                        this.init()
                        console.log(error)

                    })
            },

            editAccount() {
                this.$store.dispatch('ADD_USER_BANK', this.bank)
                    .then( response => {
                        this.init()
                        console.log(response)
                    })
                .catch( error => {
                    console.log(error.response)
                })
            },

            getAccountLink() {

                this.$store.dispatch('GET_ACCOUNT_LINK')
                    .then( response => {
                        console.log(response)
                        let url = response.link
                    })
            },

            savePaypalAccount() {

                this.$store.dispatch('ADD_PAYPAL_ACCOUNT', this.paypal)
                    .then( response => {
                        this.init()
                        $('#accountModal').modal('hide')
                        console.log( response.data )
                    })
                    .catch( error => {
                        console.log(error.response)
                    })
            },

            saveBankInformation() {

                this.$store.dispatch('ADD_USER_BANK', this.bank)
                    .then( response => {

                        this.init()
                        var url = response.link
                        window.location.href = url;
                        console.log( response )
                    })
                    .catch( error => {
                        console.log(error)
                    })

            },

            saveDebitCard() {

                this.isLoading = true

                this.alerts.debit.isALert = false
                this.alerts.debit.message = ''

                //TODO add loaifng
                this.$store.dispatch('ADD_CUSTOMER_DEBIT', this.debit)
                    .then( response => {
                        console.log(response)
                        debugger;
                        this.isLoading = false
                        $('#accountModal').modal('hide')
                        this.init()
                        // //Todo: show notification

                        var msg = 'Card Added successfully';
                        this.showSweetAlert(msg)

                    })
                .catch( error => {
                    console.log(error.data)

                    this.isLoading = false

                    this.alerts.debit.isAlert = true
                    this.alerts.debit.message = error.data.message
                })

            },


            deleteAccount(id, object, account) {
                this.isLoading = true
                var params = {}
                params.id = id,
                    params.object = object
                params.account_id = account

                this.$store.dispatch('REMOVE_EXTERNAL_ACCOUNT', params)
                .then(response => {
                    console.log(response)
                    this.init()
                    this.isLoading = false
                })
                .catch( error => {
                    console.log(error);
                    this.init()
                    this.isLoading = false
                })
            },


            showAccountModal() {

                this.bankIsActive = false
                this.paypalIsActive = false
                this.step = 1

                $('#accountModal').modal('show')
            },

            modalBankAccount() {
                $('#bankAccountModal').modal('show')
            },

            modalDebitCard() {

                $('#debitCardModal').modal('show')
            },

            showBankModal() {
                $('#bankModal').modal('show')
            },

            showPayoneerDebitCardModal() {
                $('#payoneerDebitCardModal').modal('show')
            },

            showPayoneerBankAccountModal() {
                $('#payoneerBankAccountModal').modal('show')
            },


            showSweetAlert(msg) {

                $('.widget-content .mixin').on('click', function () {
                    const toast = swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        padding: '2em'
                    });

                    toast({
                        type: 'success',
                        title: msg,
                        padding: '2em',
                    })

                })
            },

            accountOnboarding() {

                this.isLoading = true
                this.$store.dispatch('GET_ACCOUNT_LINK')
                    .then( response => {
                        console.log(response)
                        let url = response
                        window.location.href = url
                    })
                .catch( error => {
                    console.log(error)
                })
            },

            accountUpdate() {
                this.isLoading = true
                this.$store.dispatch('UPDATE_ACCOUNT_LINK')
                    .then( response => {
                        console.log(response)
                        let url = response
                        window.location.href = url
                    })
                    .catch( error => {
                        console.log(error)
                    })
            },

            checkIfCountry(country) {

                var countries = this.countries2.length
                for (var i = 0; i < countries.length; i++) {
                    if (countries[i] === country) {
                        return false;
                    }
                }
                return true;
            },

            supportedCountry( country ) {
                if (country === 'US' || country === 'CA' || country === 'SG') {
                    return true
                }
                return false
            },

            supportedCountryBankOnly( country ) {
                var countries = this.countries2.length
                for (var i = 0; i < countries.length; i++) {
                    if (countries[i] === country) {
                        return true;
                    }
                }
                return false;
            },

            showTransferWiseModal() {
                this.transfer_modal = !this.transfer_modal
            },

            addTransferWiseAccount() {

                this.isLoading = true;
                var self = this

                setTimeout(function() {

                    self.$store.dispatch('TRANSFERWISE_POST', self.form)
                        .then( response => {
                            console.log( response )
                            self.isLoading = false
                            this.transfer_modal = !this.transfer_modal
                            // add confirmation msg
                            var msg = 'TransferWise Account was added'
                            self.init();
                        })
                        .catch( error => {
                            self.isLoading = false
                            console.log(error.response)
                        })

                }, 2000, this);
            },

            updateTransferWiseAccount(){

            }
        }
    }
</script>

<style scoped>
    label {
        color:black;
    }
</style>