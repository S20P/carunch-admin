import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  // // front non-structural ======================
  bmNoevent1: Yup.bool().when(
    ['bmRepaired2', 'bmReplaced2', 'bmModified2', 'bmExistingDamage2'],
    (bmRepaired2, bmReplaced2, bmModified2, bmExistingDamage2) => {
      if (!bmRepaired2 && !bmReplaced2 && !bmModified2 && !bmExistingDamage2)
        return Yup.bool().oneOf([true], 'Any one option should be selected');
    }
  ),
  bmRepaired2: Yup.bool(),
  bmRepaired2Value: Yup.string().when('bmRepaired2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  bmReplaced2: Yup.bool(),
  bmReplaced2Value: Yup.string().when('bmReplaced2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  bmModified2: Yup.bool(),
  bmModified2Value: Yup.string().when('bmModified2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  bmExistingDamage2: Yup.bool(),
  bmExistingDamage2Value: Yup.string().when('bmExistingDamage2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),

  bsNoevent1: Yup.bool().when(
    ['bsRepaired2', 'bsReplaced2', 'bsModified2', 'bsExistingDamage2'],
    (bsRepaired2, bsReplaced2, bsModified2, bsExistingDamage2) => {
      if (!bsRepaired2 && !bsReplaced2 && !bsModified2 && !bsExistingDamage2)
        return Yup.bool().oneOf([true], 'Any one option should be selected');
    }
  ),
  bsRepaired2: Yup.bool(),
  bsRepaired2Value: Yup.string().when('bsRepaired2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  bsReplaced2: Yup.bool(),
  bsReplaced2Value: Yup.string().when('bsReplaced2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  bsModified2: Yup.bool(),
  bsModified2Value: Yup.string().when('bsModified2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  bsExistingDamage2: Yup.bool(),
  bsExistingDamage2Value: Yup.string().when('bsExistingDamage2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),

  // hNoevent1: Yup.bool().when(
  //   ['hRepaired2', 'hReplaced2', 'hModified2', 'hExistingDamage2'],
  //   (hRepaired2, hReplaced2, hModified2, hExistingDamage2) => {
  //     if (!hRepaired2 && !hReplaced2 && !hModified2 && !hExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // hRepaired2: Yup.bool(),
  // hRepaired2Value: Yup.string().when('hRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // hReplaced2: Yup.bool(),
  // hReplaced2Value: Yup.string().when('hReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // hModified2: Yup.bool(),
  // hModified2Value: Yup.string().when('hModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // hExistingDamage2: Yup.bool(),
  // hExistingDamage2Value: Yup.string().when('hExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // drNoevent1: Yup.bool().when(
  //   ['drRepaired2', 'drReplaced2', 'drModified2', 'drExistingDamage2'],
  //   (drRepaired2, drReplaced2, drModified2, drExistingDamage2) => {
  //     if (!drRepaired2 && !drReplaced2 && !drModified2 && !drExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // drRepaired2: Yup.bool(),
  // drRepaired2Value: Yup.string().when('drRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // drReplaced2: Yup.bool(),
  // drReplaced2Value: Yup.string().when('drReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // drModified2: Yup.bool(),
  // drModified2Value: Yup.string().when('drModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // drExistingDamage2: Yup.bool(),
  // drExistingDamage2Value: Yup.string().when('drExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // dlNoevent1: Yup.bool().when(
  //   ['dlRepaired2', 'dlReplaced2', 'dlModified2', 'dlExistingDamage2'],
  //   (dlRepaired2, dlReplaced2, dlModified2, dlExistingDamage2) => {
  //     if (!dlRepaired2 && !dlReplaced2 && !dlModified2 && !dlExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // dlRepaired2: Yup.bool(),
  // dlRepaired2Value: Yup.string().when('dlRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // dlReplaced2: Yup.bool(),
  // dlReplaced2Value: Yup.string().when('dlReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // dlModified2: Yup.bool(),
  // dlModified2Value: Yup.string().when('dlModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // dlExistingDamage2: Yup.bool(),
  // dlExistingDamage2Value: Yup.string().when('dlExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // frNoevent1: Yup.bool().when(
  //   ['frRepaired2', 'frReplaced2', 'frModified2', 'frExistingDamage2'],
  //   (frRepaired2, frReplaced2, frModified2, frExistingDamage2) => {
  //     if (!frRepaired2 && !frReplaced2 && !frModified2 && !frExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // frRepaired2: Yup.bool(),
  // frRepaired2Value: Yup.string().when('frRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // frReplaced2: Yup.bool(),
  // frReplaced2Value: Yup.string().when('frReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // frModified2: Yup.bool(),
  // frModified2Value: Yup.string().when('frModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // frExistingDamage2: Yup.bool(),
  // frExistingDamage2Value: Yup.string().when('frExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // flNoevent1: Yup.bool().when(
  //   ['flRepaired2', 'flReplaced2', 'flModified2', 'flExistingDamage2'],
  //   (flRepaired2, flReplaced2, flModified2, flExistingDamage2) => {
  //     if (!flRepaired2 && !flReplaced2 && !flModified2 && !flExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // flRepaired2: Yup.bool(),
  // flRepaired2Value: Yup.string().when('flRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // flReplaced2: Yup.bool(),
  // flReplaced2Value: Yup.string().when('flReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // flModified2: Yup.bool(),
  // flModified2Value: Yup.string().when('flModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // flExistingDamage2: Yup.bool(),
  // flExistingDamage2Value: Yup.string().when('flExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // wrNoevent1: Yup.bool().when(['wrExistingDamage2'], (wrExistingDamage2) => {
  //   if (!wrExistingDamage2) return Yup.bool().oneOf([true], 'Any one option should be selected');
  // }),
  // wrExistingDamage2: Yup.bool(),
  // wrExistingDamage2Value: Yup.string().when('wrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // wlNoevent1: Yup.bool().when(['wlExistingDamage2'], (wlExistingDamage2) => {
  //   if (!wlExistingDamage2) return Yup.bool().oneOf([true], 'Any one option should be selected');
  // }),
  // wlExistingDamage2: Yup.bool(),
  // wlExistingDamage2Value: Yup.string().when('wlExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // smrNoevent1: Yup.bool().when(
  //   ['smrGlassCracked2', 'smrOuterCasingDamage2'],
  //   (smrGlassCracked2, smrOuterCasingDamage2) => {
  //     if (!smrGlassCracked2 && !smrOuterCasingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // smrGlassCracked2: Yup.bool(),
  // smrGlassCracked2Value: Yup.string().when('smrGlassCracked2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // smrOuterCasingDamage2: Yup.bool(),
  // smrOuterCasingDamage2Value: Yup.string().when('smrOuterCasingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  smlNoevent1: Yup.bool().when(
    ['smlGlassCracked2', 'smlOuterCasingDamage2'],
    (smlGlassCracked2, smlOuterCasingDamage2) => {
      if (!smlGlassCracked2 && !smlOuterCasingDamage2)
        return Yup.bool().oneOf([true], 'Any one option should be selected');
    }
  ),
  smlGlassCracked2: Yup.bool(),
  smlGlassCracked2Value: Yup.string().when('smlGlassCracked2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  smlOuterCasingDamage2: Yup.bool(),
  smlOuterCasingDamage2Value: Yup.string().when('smlOuterCasingDamage2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),

  // // front structural ==========================
  // frrNoevent1: Yup.bool().when(
  //   ['frrRepaired2', 'frrReplaced2', 'frrModified2', 'frrExistingDamage2'],
  //   (frrRepaired2, frrReplaced2, frrModified2, frrExistingDamage2) => {
  //     if (!frrRepaired2 && !frrReplaced2 && !frrModified2 && !frrExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // frrRepaired2: Yup.bool(),
  // frrRepaired2Value: Yup.string().when('frrRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // frrReplaced2: Yup.bool(),
  // frrReplaced2Value: Yup.string().when('frrReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // frrModified2: Yup.bool(),
  // frrModified2Value: Yup.string().when('frrModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // frrExistingDamage2: Yup.bool(),
  // frrExistingDamage2Value: Yup.string().when('frrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // frlNoevent1: Yup.bool().when(
  //   ['frlRepaired2', 'frlReplaced2', 'frlModified2', 'frlExistingDamage2'],
  //   (frlRepaired2, frlReplaced2, frlModified2, frlExistingDamage2) => {
  //     if (!frlRepaired2 && !frlReplaced2 && !frlModified2 && !frlExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // frlRepaired2: Yup.bool(),
  // frlRepaired2Value: Yup.string().when('frlRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // frlReplaced2: Yup.bool(),
  // frlReplaced2Value: Yup.string().when('frlReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // frlModified2: Yup.bool(),
  // frlModified2Value: Yup.string().when('frlModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // frlExistingDamage2: Yup.bool(),
  // frlExistingDamage2Value: Yup.string().when('frlExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // mdNoevent1: Yup.bool().when(['mdExistingDamage2'], (mdExistingDamage2) => {
  //   if (!mdExistingDamage2) return Yup.bool().oneOf([true], 'Any one option should be selected');
  // }),
  // mdExistingDamage2: Yup.bool(),

  // aarNoevent1: Yup.bool().when(
  //   ['aarRepaired2', 'aarReplaced2', 'aarModified2', 'aarExistingDamage2'],
  //   (aarRepaired2, aarReplaced2, aarModified2, aarExistingDamage2) => {
  //     if (!aarRepaired2 && !aarReplaced2 && !aarModified2 && !aarExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // aarRepaired2: Yup.bool(),
  // aarRepaired2Value: Yup.string().when('aarRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // aarReplaced2: Yup.bool(),
  // aarReplaced2Value: Yup.string().when('aarReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // aarModified2: Yup.bool(),
  // aarModified2Value: Yup.string().when('aarModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // aarExistingDamage2: Yup.bool(),
  // aarExistingDamage2Value: Yup.string().when('aarExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // aalNoevent1: Yup.bool().when(
  //   ['aalRepaired2', 'aalReplaced2', 'aalModified2', 'aalExistingDamage2'],
  //   (aalRepaired2, aalReplaced2, aalModified2, aalExistingDamage2) => {
  //     if (!aalRepaired2 && !aalReplaced2 && !aalModified2 && !aalExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // aalRepaired2: Yup.bool(),
  // aalRepaired2Value: Yup.string().when('aalRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // aalReplaced2: Yup.bool(),
  // aalReplaced2Value: Yup.string().when('aalReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // aalModified2: Yup.bool(),
  // aalModified2Value: Yup.string().when('aalModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // aalExistingDamage2: Yup.bool(),
  // aalExistingDamage2Value: Yup.string().when('aalExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // staNoevent1: Yup.bool().when(
  //   ['staRepaired2', 'staReplaced2', 'staModified2', 'staExistingDamage2'],
  //   (staRepaired2, staReplaced2, staModified2, staExistingDamage2) => {
  //     if (!staRepaired2 && !staReplaced2 && !staModified2 && !staExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // staRepaired2: Yup.bool(),
  // staRepaired2Value: Yup.string().when('staRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // staReplaced2: Yup.bool(),
  // staReplaced2Value: Yup.string().when('staReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // staModified2: Yup.bool(),
  // staModified2Value: Yup.string().when('staModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // staExistingDamage2: Yup.bool(),
  // staExistingDamage2Value: Yup.string().when('staExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // cpNoevent1: Yup.bool().when(
  //   ['cpRepaired2', 'cpReplaced2', 'cpModified2', 'cpExistingDamage2'],
  //   (cpRepaired2, cpReplaced2, cpModified2, cpExistingDamage2) => {
  //     if (!cpRepaired2 && !cpReplaced2 && !cpModified2 && !cpExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // cpRepaired2: Yup.bool(),
  // cpRepaired2Value: Yup.string().when('cpRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cpReplaced2: Yup.bool(),
  // cpReplaced2Value: Yup.string().when('cpReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cpModified2: Yup.bool(),
  // cpModified2Value: Yup.string().when('cpModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cpExistingDamage2: Yup.bool(),
  // cpExistingDamage2Value: Yup.string().when('cpExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // cmrNoevent1: Yup.bool().when(
  //   ['cmrRepaired2', 'cmrReplaced2', 'cmrModified2', 'cmrExistingDamage2', 'cmrBoltOn2'],
  //   (cmrRepaired2, cmrReplaced2, cmrModified2, cmrExistingDamage2, cmrBoltOn2) => {
  //     if (!cmrRepaired2 && !cmrReplaced2 && !cmrModified2 && !cmrExistingDamage2 && !cmrBoltOn2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // cmrRepaired2: Yup.bool(),
  // cmrRepaired2Value: Yup.string().when('cmrRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cmrReplaced2: Yup.bool(),
  // cmrReplaced2Value: Yup.string().when('cmrReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cmrModified2: Yup.bool(),
  // cmrModified2Value: Yup.string().when('cmrModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cmrExistingDamage2: Yup.bool(),
  // cmrExistingDamage2Value: Yup.string().when('cmrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cmrBoltOn2: Yup.bool(),
  // cmrBoltOn2Value: Yup.string().when('cmrBoltOn2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // cmlNoevent1: Yup.bool().when(
  //   ['cmlRepaired2', 'cmlReplaced2', 'cmlModified2', 'cmlExistingDamage2', 'cmlBoltOn2'],
  //   (cmlRepaired2, cmlReplaced2, cmlModified2, cmlExistingDamage2, cmlBoltOn2) => {
  //     if (!cmlRepaired2 && !cmlReplaced2 && !cmlModified2 && !cmlExistingDamage2 && !cmlBoltOn2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // cmlRepaired2: Yup.bool(),
  // cmlRepaired2Value: Yup.string().when('cmlRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cmlReplaced2: Yup.bool(),
  // cmlReplaced2Value: Yup.string().when('cmlReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cmlModified2: Yup.bool(),
  // cmlModified2Value: Yup.string().when('cmlModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cmlExistingDamage2: Yup.bool(),
  // cmlExistingDamage2Value: Yup.string().when('cmlExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cmlBoltOn2: Yup.bool(),
  // cmlBoltOn2Value: Yup.string().when('cmlBoltOn2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // sparNoevent1: Yup.bool().when(
  //   ['sparRepaired2', 'sparReplaced2', 'sparModified2', 'sparExistingDamage2'],
  //   (sparRepaired2, sparReplaced2, sparModified2, sparExistingDamage2) => {
  //     if (!sparRepaired2 && !sparReplaced2 && !sparModified2 && !sparExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // sparRepaired2: Yup.bool(),
  // sparRepaired2Value: Yup.string().when('sparRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // sparReplaced2: Yup.bool(),
  // sparReplaced2Value: Yup.string().when('sparReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // sparModified2: Yup.bool(),
  // sparModified2Value: Yup.string().when('sparModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // sparExistingDamage2: Yup.bool(),
  // sparExistingDamage2Value: Yup.string().when('sparExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // spalNoevent1: Yup.bool().when(
  //   ['spalRepaired2', 'spalReplaced2', 'spalModified2', 'spalExistingDamage2'],
  //   (spalRepaired2, spalReplaced2, spalModified2, spalExistingDamage2) => {
  //     if (!spalRepaired2 && !spalReplaced2 && !spalModified2 && !spalExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // spalRepaired2: Yup.bool(),
  // spalRepaired2Value: Yup.string().when('spalRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spalReplaced2: Yup.bool(),
  // spalReplaced2Value: Yup.string().when('spalReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spalModified2: Yup.bool(),
  // spalModified2Value: Yup.string().when('spalModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spalExistingDamage2: Yup.bool(),
  // spalExistingDamage2Value: Yup.string().when('spalExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // spbrNoevent1: Yup.bool().when(
  //   ['spbrRepaired2', 'spbrReplaced2', 'spbrModified2', 'spbrExistingDamage2'],
  //   (spbrRepaired2, spbrReplaced2, spbrModified2, spbrExistingDamage2) => {
  //     if (!spbrRepaired2 && !spbrReplaced2 && !spbrModified2 && !spbrExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // spbrRepaired2: Yup.bool(),
  // spbrRepaired2Value: Yup.string().when('spbrRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spbrReplaced2: Yup.bool(),
  // spbrReplaced2Value: Yup.string().when('spbrReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spbrModified2: Yup.bool(),
  // spbrModified2Value: Yup.string().when('spbrModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spbrExistingDamage2: Yup.bool(),
  // spbrExistingDamage2Value: Yup.string().when('spbrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // spblNoevent1: Yup.bool().when(
  //   ['spblRepaired2', 'spblReplaced2', 'spblModified2', 'spblExistingDamage2'],
  //   (spblRepaired2, spblReplaced2, spblModified2, spblExistingDamage2) => {
  //     if (!spblRepaired2 && !spblReplaced2 && !spblModified2 && !spblExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // spblRepaired2: Yup.bool(),
  // spblRepaired2Value: Yup.string().when('spblRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spblReplaced2: Yup.bool(),
  // spblReplaced2Value: Yup.string().when('spblReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spblModified2: Yup.bool(),
  // spblModified2Value: Yup.string().when('spblModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spblExistingDamage2: Yup.bool(),
  // spblExistingDamage2Value: Yup.string().when('spblExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // spcrNoevent1: Yup.bool().when(
  //   ['spcrRepaired2', 'spcrReplaced2', 'spcrModified2', 'spcrExistingDamage2'],
  //   (spcrRepaired2, spcrReplaced2, spcrModified2, spcrExistingDamage2) => {
  //     if (!spcrRepaired2 && !spcrReplaced2 && !spcrModified2 && !spcrExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // spcrRepaired2: Yup.bool(),
  // spcrRepaired2Value: Yup.string().when('spcrRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spcrReplaced2: Yup.bool(),
  // spcrReplaced2Value: Yup.string().when('spcrReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spcrModified2: Yup.bool(),
  // spcrModified2Value: Yup.string().when('spcrModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spcrExistingDamage2: Yup.bool(),
  // spcrExistingDamage2Value: Yup.string().when('spcrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // spclNoevent1: Yup.bool().when(
  //   ['spclRepaired2', 'spclReplaced2', 'spclModified2', 'spclExistingDamage2'],
  //   (spclRepaired2, spclReplaced2, spclModified2, spclExistingDamage2) => {
  //     if (!spclRepaired2 && !spclReplaced2 && !spclModified2 && !spclExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // spclRepaired2: Yup.bool(),
  // spclRepaired2Value: Yup.string().when('spclRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spclReplaced2: Yup.bool(),
  // spclReplaced2Value: Yup.string().when('spclReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spclModified2: Yup.bool(),
  // spclModified2Value: Yup.string().when('spclModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spclExistingDamage2: Yup.bool(),
  // spclExistingDamage2Value: Yup.string().when('spclExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // spdrNoevent1: Yup.bool().when(
  //   ['spdrRepaired2', 'spdrReplaced2', 'spdrModified2', 'spdrExistingDamage2'],
  //   (spdrRepaired2, spdrReplaced2, spdrModified2, spdrExistingDamage2) => {
  //     if (!spdrRepaired2 && !spdrReplaced2 && !spdrModified2 && !spdrExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // spdrRepaired2: Yup.bool(),
  // spdrRepaired2Value: Yup.string().when('spdrRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spdrReplaced2: Yup.bool(),
  // spdrReplaced2Value: Yup.string().when('spdrReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spdrModified2: Yup.bool(),
  // spdrModified2Value: Yup.string().when('spdrModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spdrExistingDamage2: Yup.bool(),
  // spdrExistingDamage2Value: Yup.string().when('spdrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // spdlNoevent1: Yup.bool().when(
  //   ['spdlRepaired2', 'spdlReplaced2', 'spdlModified2', 'spdlExistingDamage2'],
  //   (spdlRepaired2, spdlReplaced2, spdlModified2, spdlExistingDamage2) => {
  //     if (!spdlRepaired2 && !spdlReplaced2 && !spdlModified2 && !spdlExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // spdlRepaired2: Yup.bool(),
  // spdlRepaired2Value: Yup.string().when('spdlRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spdlReplaced2: Yup.bool(),
  // spdlReplaced2Value: Yup.string().when('spdlReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spdlModified2: Yup.bool(),
  // spdlModified2Value: Yup.string().when('spdlModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spdlExistingDamage2: Yup.bool(),
  // spdlExistingDamage2Value: Yup.string().when('spdlExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // // front typical =============================
  // spNoevent1: Yup.bool().when(
  //   ['spRepaired2', 'spReplaced2', 'spModified2', 'spExistingDamage2'],
  //   (spRepaired2, spReplaced2, spModified2, spExistingDamage2) => {
  //     if (!spRepaired2 && !spReplaced2 && !spModified2 && !spExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // spRepaired2: Yup.bool(),
  // spRepaired2Value: Yup.string().when('spRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spReplaced2: Yup.bool(),
  // spReplaced2Value: Yup.string().when('spReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spModified2: Yup.bool(),
  // spModified2Value: Yup.string().when('spModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spExistingDamage2: Yup.bool(),
  // spExistingDamage2Value: Yup.string().when('spExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // mcmNoevent1: Yup.bool().when(
  //   ['mcmRepaired2', 'mcmReplaced2', 'mcmModified2', 'mcmExistingDamage2'],
  //   (mcmRepaired2, mcmReplaced2, mcmModified2, mcmExistingDamage2) => {
  //     if (!mcmRepaired2 && !mcmReplaced2 && !mcmModified2 && !mcmExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // mcmRepaired2: Yup.bool(),
  // mcmRepaired2Value: Yup.string().when('mcmRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // mcmReplaced2: Yup.bool(),
  // mcmReplaced2Value: Yup.string().when('mcmReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // mcmModified2: Yup.bool(),
  // mcmModified2Value: Yup.string().when('mcmModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // mcmExistingDamage2: Yup.bool(),
  // mcmExistingDamage2Value: Yup.string().when('mcmExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // tbNoevent1: Yup.bool().when(
  //   ['tbRepaired2', 'tbReplaced2', 'tbModified2', 'tbExistingDamage2'],
  //   (tbRepaired2, tbReplaced2, tbModified2, tbExistingDamage2) => {
  //     if (!tbRepaired2 && !tbReplaced2 && !tbModified2 && !tbExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // tbRepaired2: Yup.bool(),
  // tbRepaired2Value: Yup.string().when('tbRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // tbReplaced2: Yup.bool(),
  // tbReplaced2Value: Yup.string().when('tbReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // tbModified2: Yup.bool(),
  // tbModified2Value: Yup.string().when('tbModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // tbExistingDamage2: Yup.bool(),
  // tbExistingDamage2Value: Yup.string().when('tbExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // tsmNoevent1: Yup.bool().when(
  //   ['tsmRepaired2', 'tsmReplaced2', 'tsmModified2', 'tsmExistingDamage2'],
  //   (tsmRepaired2, tsmReplaced2, tsmModified2, tsmExistingDamage2) => {
  //     if (!tsmRepaired2 && !tsmReplaced2 && !tsmModified2 && !tsmExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // tsmRepaired2: Yup.bool(),
  // tsmRepaired2Value: Yup.string().when('tsmRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // tsmReplaced2: Yup.bool(),
  // tsmReplaced2Value: Yup.string().when('tsmReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // tsmModified2: Yup.bool(),
  // tsmModified2Value: Yup.string().when('tsmModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // tsmExistingDamage2: Yup.bool(),
  // tsmExistingDamage2Value: Yup.string().when('tsmExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // // roof non-structural =======================
  dNoevent1: Yup.bool().when(['dHailDamage2'], (dHailDamage2) => {
    if (!dHailDamage2) return Yup.bool().oneOf([true], 'Any one option should be selected');
  }),
  dqty: Yup.string().when(['dNoevent1'], (dNoevent1) => {
    if (!dNoevent1) return Yup.string().required('Dents quantity is require');
  }),
  // -------------
  // dqty: Yup.string().when('dNoevent1', {
  //   is: false,
  //   then: Yup.string().required('Dents quantity is require'),
  // }),
  // dqty: Yup.string().required('Dents quantity is require'),
  // -------------
  dHailDamage2: Yup.bool(),
  dHailDamage2Value: Yup.string().when('dHailDamage2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),

  pdrNoevent1: Yup.bool().when(['pdrExists2'], (pdrExists2) => {
    if (!pdrExists2) return Yup.bool().oneOf([true], 'Any one option should be selected');
  }),
  pdrExists2: Yup.bool(),
  pdrExists2Value: Yup.string().when('pdrExists2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),

  // // roof structural ===========================
  rbNoevent1: Yup.bool().when(
    ['rbRepaired2', 'rbReplaced2', 'rbModified2', 'rbExistingDamage2'],
    (rbRepaired2, rbReplaced2, rbModified2, rbExistingDamage2) => {
      if (!rbRepaired2 && !rbReplaced2 && !rbModified2 && !rbExistingDamage2)
        return Yup.bool().oneOf([true], 'Any one option should be selected');
    }
  ),
  rbRepaired2: Yup.bool(),
  rbRepaired2Value: Yup.string().when('rbRepaired2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  rbReplaced2: Yup.bool(),
  rbReplaced2Value: Yup.string().when('rbReplaced2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  rbModified2: Yup.bool(),
  rbModified2Value: Yup.string().when('rbModified2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),
  rbExistingDamage2: Yup.bool(),
  rbExistingDamage2Value: Yup.string().when('rbExistingDamage2', {
    is: true,
    then: Yup.string().required('Any one option is required'),
  }),

  // // side non-structural =======================
  // roparNoevent1: Yup.bool().when(
  //   ['roparRepaired2', 'roparReplaced2', 'roparModified2', 'roparExistingDamage2'],
  //   (roparRepaired2, roparReplaced2, roparModified2, roparExistingDamage2) => {
  //     if (!roparRepaired2 && !roparReplaced2 && !roparModified2 && !roparExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // roparRepaired2: Yup.bool(),
  // roparRepaired2Value: Yup.string().when('roparRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // roparReplaced2: Yup.bool(),
  // roparReplaced2Value: Yup.string().when('roparReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // roparModified2: Yup.bool(),
  // roparModified2Value: Yup.string().when('roparModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // roparExistingDamage2: Yup.bool(),
  // roparExistingDamage2Value: Yup.string().when('roparExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // ropalNoevent1: Yup.bool().when(
  //   ['ropalRepaired2', 'ropalReplaced2', 'ropalModified2', 'ropalExistingDamage2'],
  //   (ropalRepaired2, ropalReplaced2, ropalModified2, ropalExistingDamage2) => {
  //     if (!ropalRepaired2 && !ropalReplaced2 && !ropalModified2 && !ropalExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // ropalRepaired2: Yup.bool(),
  // ropalRepaired2Value: Yup.string().when('ropalRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ropalReplaced2: Yup.bool(),
  // ropalReplaced2Value: Yup.string().when('ropalReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ropalModified2: Yup.bool(),
  // ropalModified2Value: Yup.string().when('ropalModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ropalExistingDamage2: Yup.bool(),
  // ropalExistingDamage2Value: Yup.string().when('ropalExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // riparNoevent1: Yup.bool().when(
  //   ['riparRepaired2', 'riparReplaced2', 'riparModified2', 'riparExistingDamage2', 'riparTear2'],
  //   (riparRepaired2, riparReplaced2, riparModified2, riparExistingDamage2, riparTear2) => {
  //     if (!riparRepaired2 && !riparReplaced2 && !riparModified2 && !riparExistingDamage2 && !riparTear2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // riparRepaired2: Yup.bool(),
  // riparRepaired2Value: Yup.string().when('riparRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // riparReplaced2: Yup.bool(),
  // riparReplaced2Value: Yup.string().when('riparReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // riparModified2: Yup.bool(),
  // riparModified2Value: Yup.string().when('riparModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // riparExistingDamage2: Yup.bool(),
  // riparExistingDamage2Value: Yup.string().when('riparExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // riparTear2: Yup.bool(),
  // riparTear2Value: Yup.string().when('riparTear2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // ripalNoevent1: Yup.bool().when(
  //   ['ripalRepaired2', 'ripalReplaced2', 'ripalModified2', 'ripalExistingDamage2', 'ripalTear2'],
  //   (ripalRepaired2, ripalReplaced2, ripalModified2, ripalExistingDamage2, ripalTear2) => {
  //     if (!ripalRepaired2 && !ripalReplaced2 && !ripalModified2 && !ripalExistingDamage2 && !ripalTear2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // ripalRepaired2: Yup.bool(),
  // ripalRepaired2Value: Yup.string().when('ripalRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ripalReplaced2: Yup.bool(),
  // ripalReplaced2Value: Yup.string().when('ripalReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ripalModified2: Yup.bool(),
  // ripalModified2Value: Yup.string().when('ripalModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ripalExistingDamage2: Yup.bool(),
  // ripalExistingDamage2Value: Yup.string().when('ripalExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ripalTear2: Yup.bool(),
  // ripalTear2Value: Yup.string().when('ripalTear2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // qNoevent1: Yup.bool().when(
  //   ['qRepaired2', 'qReplaced2', 'qModified2', 'qExistingDamage2'],
  //   (qRepaired2, qReplaced2, qModified2, qExistingDamage2) => {
  //     if (!qRepaired2 && !qReplaced2 && !qModified2 && !qExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // qRepaired2: Yup.bool(),
  // qRepaired2Value: Yup.string().when('qRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // qReplaced2: Yup.bool(),
  // qReplaced2Value: Yup.string().when('qReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // qModified2: Yup.bool(),
  // qModified2Value: Yup.string().when('qModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // qExistingDamage2: Yup.bool(),
  // qExistingDamage2Value: Yup.string().when('qExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // cNoevent1: Yup.bool().when(
  //   ['cRepaired2', 'cReplaced2', 'cModified2', 'cExistingDamage2'],
  //   (cRepaired2, cReplaced2, cModified2, cExistingDamage2) => {
  //     if (!cRepaired2 && !cReplaced2 && !cModified2 && !cExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // cRepaired2: Yup.bool(),
  // cRepaired2Value: Yup.string().when('cRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cReplaced2: Yup.bool(),
  // cReplaced2Value: Yup.string().when('cReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cModified2: Yup.bool(),
  // cModified2Value: Yup.string().when('cModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // cExistingDamage2: Yup.bool(),
  // cExistingDamage2Value: Yup.string().when('cExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // spnNoevent1: Yup.bool().when(
  //   ['spnRepaired2', 'spnReplaced2', 'spnModified2', 'spnExistingDamage2'],
  //   (spnRepaired2, spnReplaced2, spnModified2, spnExistingDamage2) => {
  //     if (!spnRepaired2 && !spnReplaced2 && !spnModified2 && !spnExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // spnRepaired2: Yup.bool(),
  // spnRepaired2Value: Yup.string().when('spnRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spnReplaced2: Yup.bool(),
  // spnReplaced2Value: Yup.string().when('spnReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spnModified2: Yup.bool(),
  // spnModified2Value: Yup.string().when('spnModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // spnExistingDamage2: Yup.bool(),
  // spnExistingDamage2Value: Yup.string().when('spnExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // ualNoevent1: Yup.bool().when(
  //   ['ualRepaired2', 'ualReplaced2', 'ualModified2', 'ualExistingDamage2'],
  //   (ualRepaired2, ualReplaced2, ualModified2, ualExistingDamage2) => {
  //     if (!ualRepaired2 && !ualReplaced2 && !ualModified2 && !ualExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // ualRepaired2: Yup.bool(),
  // ualRepaired2Value: Yup.string().when('ualRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ualReplaced2: Yup.bool(),
  // ualReplaced2Value: Yup.string().when('ualReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ualModified2: Yup.bool(),
  // ualModified2Value: Yup.string().when('ualModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // ualExistingDamage2: Yup.bool(),
  // ualExistingDamage2Value: Yup.string().when('ualExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // uarNoevent1: Yup.bool().when(
  //   ['uarRepaired2', 'uarReplaced2', 'uarModified2', 'uarExistingDamage2'],
  //   (uarRepaired2, uarReplaced2, uarModified2, uarExistingDamage2) => {
  //     if (!uarRepaired2 && !uarReplaced2 && !uarModified2 && !uarExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // uarRepaired2: Yup.bool(),
  // uarRepaired2Value: Yup.string().when('uarRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // uarReplaced2: Yup.bool(),
  // uarReplaced2Value: Yup.string().when('uarReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // uarModified2: Yup.bool(),
  // uarModified2Value: Yup.string().when('uarModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // uarExistingDamage2: Yup.bool(),
  // uarExistingDamage2Value: Yup.string().when('uarExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // // rear non-structural =======================
  // rdrNoevent1: Yup.bool().when(
  //   ['rdrRepaired2', 'rdrReplaced2', 'rdrModified2', 'rdrExistingDamage2'],
  //   (rdrRepaired2, rdrReplaced2, rdrModified2, rdrExistingDamage2) => {
  //     if (!rdrRepaired2 && !rdrReplaced2 && !rdrModified2 && !rdrExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // rdrRepaired2: Yup.bool(),
  // rdrRepaired2Value: Yup.string().when('rdrRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rdrReplaced2: Yup.bool(),
  // rdrReplaced2Value: Yup.string().when('rdrReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rdrModified2: Yup.bool(),
  // rdrModified2Value: Yup.string().when('rdrModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rdrExistingDamage2: Yup.bool(),
  // rdrExistingDamage2Value: Yup.string().when('rdrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // rdlNoevent1: Yup.bool().when(
  //   ['rdlRepaired2', 'rdlReplaced2', 'rdlModified2', 'rdlExistingDamage2'],
  //   (rdlRepaired2, rdlReplaced2, rdlModified2, rdlExistingDamage2) => {
  //     if (!rdlRepaired2 && !rdlReplaced2 && !rdlModified2 && !rdlExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // rdlRepaired2: Yup.bool(),
  // rdlRepaired2Value: Yup.string().when('rdlRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rdlReplaced2: Yup.bool(),
  // rdlReplaced2Value: Yup.string().when('rdlReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rdlModified2: Yup.bool(),
  // rdlModified2Value: Yup.string().when('rdlModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rdlExistingDamage2: Yup.bool(),
  // rdlExistingDamage2Value: Yup.string().when('rdlExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // // rear structural ===========================
  // rrNoevent1: Yup.bool().when(
  //   ['rrRepaired2', 'rrReplaced2', 'rrModified2', 'rrExistingDamage2'],
  //   (rrRepaired2, rrReplaced2, rrModified2, rrExistingDamage2) => {
  //     if (!rrRepaired2 && !rrReplaced2 && !rrModified2 && !rrExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // rrRepaired2: Yup.bool(),
  // rrRepaired2Value: Yup.string().when('rrRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rrReplaced2: Yup.bool(),
  // rrReplaced2Value: Yup.string().when('rrReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rrModified2: Yup.bool(),
  // rrModified2Value: Yup.string().when('rrModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rrExistingDamage2: Yup.bool(),
  // rrExistingDamage2Value: Yup.string().when('rrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // rlNoevent1: Yup.bool().when(
  //   ['rlRepaired2', 'rlReplaced2', 'rlModified2', 'rlExistingDamage2'],
  //   (rlRepaired2, rlReplaced2, rlModified2, rlExistingDamage2) => {
  //     if (!rlRepaired2 && !rlReplaced2 && !rlModified2 && !rlExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // rlRepaired2: Yup.bool(),
  // rlRepaired2Value: Yup.string().when('rlRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rlReplaced2: Yup.bool(),
  // rlReplaced2Value: Yup.string().when('rlReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rlModified2: Yup.bool(),
  // rlModified2Value: Yup.string().when('rlModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rlExistingDamage2: Yup.bool(),
  // rlExistingDamage2Value: Yup.string().when('rlExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // qprNoevent1: Yup.bool().when(
  //   ['qprRepaired2', 'qprReplaced2', 'qprModified2', 'qprExistingDamage2'],
  //   (qprRepaired2, qprReplaced2, qprModified2, qprExistingDamage2) => {
  //     if (!qprRepaired2 && !qprReplaced2 && !qprModified2 && !qprExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // qprRepaired2: Yup.bool(),
  // qprRepaired2Value: Yup.string().when('qprRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // qprReplaced2: Yup.bool(),
  // qprReplaced2Value: Yup.string().when('qprReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // qprModified2: Yup.bool(),
  // qprModified2Value: Yup.string().when('qprModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // qprExistingDamage2: Yup.bool(),
  // qprExistingDamage2Value: Yup.string().when('qprExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // qplNoevent1: Yup.bool().when(
  //   ['qplRepaired2', 'qplReplaced2', 'qplModified2', 'qplExistingDamage2'],
  //   (qplRepaired2, qplReplaced2, qplModified2, qplExistingDamage2) => {
  //     if (!qplRepaired2 && !qplReplaced2 && !qplModified2 && !qplExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // qplRepaired2: Yup.bool(),
  // qplRepaired2Value: Yup.string().when('qplRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // qplReplaced2: Yup.bool(),
  // qplReplaced2Value: Yup.string().when('qplReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // qplModified2: Yup.bool(),
  // qplModified2Value: Yup.string().when('qplModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // qplExistingDamage2: Yup.bool(),
  // qplExistingDamage2Value: Yup.string().when('qplExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // iqprNoevent1: Yup.bool().when(
  //   ['iqprRepaired2', 'iqprReplaced2', 'iqprModified2', 'iqprExistingDamage2'],
  //   (iqprRepaired2, iqprReplaced2, iqprModified2, iqprExistingDamage2) => {
  //     if (!iqprRepaired2 && !iqprReplaced2 && !iqprModified2 && !iqprExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // iqprRepaired2: Yup.bool(),
  // iqprRepaired2Value: Yup.string().when('iqprRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // iqprReplaced2: Yup.bool(),
  // iqprReplaced2Value: Yup.string().when('iqprReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // iqprModified2: Yup.bool(),
  // iqprModified2Value: Yup.string().when('iqprModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // iqprExistingDamage2: Yup.bool(),
  // iqprExistingDamage2Value: Yup.string().when('iqprExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // iqplNoevent1: Yup.bool().when(
  //   ['iqplRepaired2', 'iqplReplaced2', 'iqplModified2', 'iqplExistingDamage2'],
  //   (iqplRepaired2, iqplReplaced2, iqplModified2, iqplExistingDamage2) => {
  //     if (!iqplRepaired2 && !iqplReplaced2 && !iqplModified2 && !iqplExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // iqplRepaired2: Yup.bool(),
  // iqplRepaired2Value: Yup.string().when('iqplRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // iqplReplaced2: Yup.bool(),
  // iqplReplaced2Value: Yup.string().when('iqplReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // iqplModified2: Yup.bool(),
  // iqplModified2Value: Yup.string().when('iqplModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // iqplExistingDamage2: Yup.bool(),
  // iqplExistingDamage2Value: Yup.string().when('iqplExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // bprNoevent1: Yup.bool().when(
  //   ['bprRepaired2', 'bprReplaced2', 'bprModified2', 'bprExistingDamage2'],
  //   (bprRepaired2, bprReplaced2, bprModified2, bprExistingDamage2) => {
  //     if (!bprRepaired2 && !bprReplaced2 && !bprModified2 && !bprExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // bprRepaired2: Yup.bool(),
  // bprRepaired2Value: Yup.string().when('bprRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // bprReplaced2: Yup.bool(),
  // bprReplaced2Value: Yup.string().when('bprReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // bprModified2: Yup.bool(),
  // bprModified2Value: Yup.string().when('bprModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // bprExistingDamage2: Yup.bool(),
  // bprExistingDamage2Value: Yup.string().when('bprExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // bplNoevent1: Yup.bool().when(
  //   ['bplRepaired2', 'bplReplaced2', 'bplModified2', 'bplExistingDamage2'],
  //   (bplRepaired2, bplReplaced2, bplModified2, bplExistingDamage2) => {
  //     if (!bplRepaired2 && !bplReplaced2 && !bplModified2 && !bplExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // bplRepaired2: Yup.bool(),
  // bplRepaired2Value: Yup.string().when('bplRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // bplReplaced2: Yup.bool(),
  // bplReplaced2Value: Yup.string().when('bplReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // bplModified2: Yup.bool(),
  // bplModified2Value: Yup.string().when('bplModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // bplExistingDamage2: Yup.bool(),
  // bplExistingDamage2Value: Yup.string().when('bplExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // fpNoevent1: Yup.bool().when(
  //   ['fpRepaired2', 'fpReplaced2', 'fpModified2', 'fpExistingDamage2'],
  //   (fpRepaired2, fpReplaced2, fpModified2, fpExistingDamage2) => {
  //     if (!fpRepaired2 && !fpReplaced2 && !fpModified2 && !fpExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // fpRepaired2: Yup.bool(),
  // fpRepaired2Value: Yup.string().when('fpRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fpReplaced2: Yup.bool(),
  // fpReplaced2Value: Yup.string().when('fpReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fpModified2: Yup.bool(),
  // fpModified2Value: Yup.string().when('fpModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fpExistingDamage2: Yup.bool(),
  // fpExistingDamage2Value: Yup.string().when('fpExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // uvNoevent1: Yup.bool().when(
  //   ['uvRepaired2', 'uvReplaced2', 'uvModified2', 'uvExistingDamage2'],
  //   (uvRepaired2, uvReplaced2, uvModified2, uvExistingDamage2) => {
  //     if (!uvRepaired2 && !uvReplaced2 && !uvModified2 && !uvExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // uvRepaired2: Yup.bool(),
  // uvRepaired2Value: Yup.string().when('uvRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // uvReplaced2: Yup.bool(),
  // uvReplaced2Value: Yup.string().when('uvReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // uvModified2: Yup.bool(),
  // uvModified2Value: Yup.string().when('uvModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // uvExistingDamage2: Yup.bool(),
  // uvExistingDamage2Value: Yup.string().when('uvExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // // frame structural ==========================
  // fNoevent1: Yup.bool().when(
  //   ['fRepaired2', 'fReplaced2', 'fModified2', 'fExistingDamage2'],
  //   (fRepaired2, fReplaced2, fModified2, fExistingDamage2) => {
  //     if (!fRepaired2 && !fReplaced2 && !fModified2 && !fExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // fRepaired2: Yup.bool(),
  // fRepaired2Value: Yup.string().when('fRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fReplaced2: Yup.bool(),
  // fReplaced2Value: Yup.string().when('fReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fModified2: Yup.bool(),
  // fModified2Value: Yup.string().when('fModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fExistingDamage2: Yup.bool(),
  // fExistingDamage2Value: Yup.string().when('fExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // fsrrNoevent1: Yup.bool().when(
  //   ['fsrrRepaired2', 'fsrrReplaced2', 'fsrrModified2', 'fsrrExistingDamage2'],
  //   (fsrrRepaired2, fsrrReplaced2, fsrrModified2, fsrrExistingDamage2) => {
  //     if (!fsrrRepaired2 && !fsrrReplaced2 && !fsrrModified2 && !fsrrExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // fsrrRepaired2: Yup.bool(),
  // fsrrRepaired2Value: Yup.string().when('fsrrRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fsrrReplaced2: Yup.bool(),
  // fsrrReplaced2Value: Yup.string().when('fsrrReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fsrrModified2: Yup.bool(),
  // fsrrModified2Value: Yup.string().when('fsrrModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fsrrExistingDamage2: Yup.bool(),
  // fsrrExistingDamage2Value: Yup.string().when('fsrrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // fsrlNoevent1: Yup.bool().when(
  //   ['fsrlRepaired2', 'fsrlReplaced2', 'fsrlModified2', 'fsrlExistingDamage2'],
  //   (fsrlRepaired2, fsrlReplaced2, fsrlModified2, fsrlExistingDamage2) => {
  //     if (!fsrlRepaired2 && !fsrlReplaced2 && !fsrlModified2 && !fsrlExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // fsrlRepaired2: Yup.bool(),
  // fsrlRepaired2Value: Yup.string().when('fsrlRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fsrlReplaced2: Yup.bool(),
  // fsrlReplaced2Value: Yup.string().when('fsrlReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fsrlModified2: Yup.bool(),
  // fsrlModified2Value: Yup.string().when('fsrlModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // fsrlExistingDamage2: Yup.bool(),
  // fsrlExistingDamage2Value: Yup.string().when('fsrlExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // rscmNoevent1: Yup.bool().when(
  //   ['rscmRepaired2', 'rscmReplaced2', 'rscmModified2', 'rscmExistingDamage2'],
  //   (rscmRepaired2, rscmReplaced2, rscmModified2, rscmExistingDamage2) => {
  //     if (!rscmRepaired2 && !rscmReplaced2 && !rscmModified2 && !rscmExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // rscmRepaired2: Yup.bool(),
  // rscmRepaired2Value: Yup.string().when('rscmRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rscmReplaced2: Yup.bool(),
  // rscmReplaced2Value: Yup.string().when('rscmReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rscmModified2: Yup.bool(),
  // rscmModified2Value: Yup.string().when('rscmModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rscmExistingDamage2: Yup.bool(),
  // rscmExistingDamage2Value: Yup.string().when('rscmExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // rspNoevent1: Yup.bool().when(
  //   ['rspRepaired2', 'rspReplaced2', 'rspModified2', 'rspExistingDamage2'],
  //   (rspRepaired2, rspReplaced2, rspModified2, rspExistingDamage2) => {
  //     if (!rspRepaired2 && !rspReplaced2 && !rspModified2 && !rspExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // rspRepaired2: Yup.bool(),
  // rspRepaired2Value: Yup.string().when('rspRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rspReplaced2: Yup.bool(),
  // rspReplaced2Value: Yup.string().when('rspReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rspModified2: Yup.bool(),
  // rspModified2Value: Yup.string().when('rspModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rspExistingDamage2: Yup.bool(),
  // rspExistingDamage2Value: Yup.string().when('rspExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // rfrNoevent1: Yup.bool().when(
  //   ['rfrRepaired2', 'rfrReplaced2', 'rfrModified2', 'rfrExistingDamage2'],
  //   (rfrRepaired2, rfrReplaced2, rfrModified2, rfrExistingDamage2) => {
  //     if (!rfrRepaired2 && !rfrReplaced2 && !rfrModified2 && !rfrExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // rfrRepaired2: Yup.bool(),
  // rfrRepaired2Value: Yup.string().when('rfrRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rfrReplaced2: Yup.bool(),
  // rfrReplaced2Value: Yup.string().when('rfrReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rfrModified2: Yup.bool(),
  // rfrModified2Value: Yup.string().when('rfrModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rfrExistingDamage2: Yup.bool(),
  // rfrExistingDamage2Value: Yup.string().when('rfrExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),

  // rcmNoevent1: Yup.bool().when(
  //   ['rcmRepaired2', 'rcmReplaced2', 'rcmModified2', 'rcmExistingDamage2'],
  //   (rcmRepaired2, rcmReplaced2, rcmModified2, rcmExistingDamage2) => {
  //     if (!rcmRepaired2 && !rcmReplaced2 && !rcmModified2 && !rcmExistingDamage2)
  //       return Yup.bool().oneOf([true], 'Any one option should be selected');
  //   }
  // ),
  // rcmRepaired2: Yup.bool(),
  // rcmRepaired2Value: Yup.string().when('rcmRepaired2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rcmReplaced2: Yup.bool(),
  // rcmReplaced2Value: Yup.string().when('rcmReplaced2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rcmModified2: Yup.bool(),
  // rcmModified2Value: Yup.string().when('rcmModified2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
  // rcmExistingDamage2: Yup.bool(),
  // rcmExistingDamage2Value: Yup.string().when('rcmExistingDamage2', {
  //   is: true,
  //   then: Yup.string().required('Any one option is required'),
  // }),
});

export { ValidationSchema };
